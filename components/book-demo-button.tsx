"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: "demo" | "register";
};

const inputClass =
  "rounded-lg border border-ink-300/60 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

function FieldLabel({
  children,
  optional,
}: {
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <span className="text-[13px] font-medium text-ink-700">
      {children}{" "}
      {optional ? (
        <span className="font-normal text-ink-500">(optional)</span>
      ) : (
        <span className="text-red-500">*</span>
      )}
    </span>
  );
}

function RegisterFields() {
  return (
    <>
      <label className="flex flex-col gap-1.5">
        <FieldLabel>Enter your full name</FieldLabel>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Enter your full name"
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <FieldLabel>Mobile Number</FieldLabel>
        <div className="flex overflow-hidden rounded-lg border border-ink-300/60 bg-white focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30">
          <span className="flex items-center border-r border-ink-300/60 px-3.5 text-[14px] text-ink-700">
            +91
          </span>
          <input
            type="tel"
            name="mobile"
            required
            inputMode="numeric"
            autoComplete="tel-national"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            title="Enter a valid 10-digit mobile number"
            placeholder="Enter phone number"
            className="min-w-0 flex-1 px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-500 focus:outline-none"
          />
        </div>
      </label>
      <label className="flex flex-col gap-1.5">
        <FieldLabel optional>Email</FieldLabel>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <FieldLabel>Vehicle Number</FieldLabel>
        <input
          type="text"
          name="vehicle_number"
          required
          autoCapitalize="characters"
          maxLength={13}
          placeholder="e.g. DL01AB1234"
          className={`${inputClass} uppercase placeholder:normal-case`}
        />
      </label>
    </>
  );
}

const OTP_LENGTH = 4;
const RESEND_SECONDS = 30;

function OtpStep({
  mobile,
  titleId,
  onVerified,
  onChangeNumber,
}: {
  mobile: string;
  titleId: string;
  onVerified: () => void;
  onChangeNumber: () => void;
}) {
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const code = digits.join("");

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft]);

  const fill = (start: number, value: string) => {
    const chars = value.replace(/\D/g, "").slice(0, OTP_LENGTH - start).split("");
    if (!chars.length) return;
    setDigits((prev) => {
      const next = [...prev];
      chars.forEach((c, i) => (next[start + i] = c));
      return next;
    });
    inputs.current[Math.min(start + chars.length, OTP_LENGTH - 1)]?.focus();
  };

  return (
    <>
      <h3 id={titleId} className="text-xl font-bold text-ink-900">
        Enter verification code
      </h3>
      <p className="mt-2 text-[14px] text-ink-700">
        We sent a {OTP_LENGTH}-digit code to{" "}
        <span className="font-semibold text-ink-900">+91 {mobile}</span>
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: verify the code with the OTP backend once it is available.
          if (code.length === OTP_LENGTH) onVerified();
        }}
        className="mt-5 flex flex-col gap-3"
      >
        <span className="text-[13px] font-medium text-ink-700">Enter OTP</span>
        <div className="flex gap-3">
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              value={d}
              inputMode="numeric"
              autoComplete={i === 0 ? "one-time-code" : "off"}
              maxLength={OTP_LENGTH}
              aria-label={`Digit ${i + 1}`}
              onChange={(e) => {
                if (e.target.value === "") {
                  setDigits((prev) => prev.map((v, j) => (j === i ? "" : v)));
                } else {
                  fill(i, e.target.value.replace(d, "") || e.target.value);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !d && i > 0) {
                  inputs.current[i - 1]?.focus();
                }
              }}
              onPaste={(e) => {
                e.preventDefault();
                fill(i, e.clipboardData.getData("text"));
              }}
              className={`h-12 w-12 rounded-xl border-2 bg-white text-center text-lg font-semibold text-ink-900 focus:border-accent focus:outline-none ${
                d ? "border-accent" : "border-ink-300/60"
              }`}
            />
          ))}
        </div>
        <button
          type="submit"
          disabled={code.length !== OTP_LENGTH}
          className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          Verify OTP
        </button>
        <div className="flex items-center justify-between text-[13px]">
          <button
            type="button"
            onClick={onChangeNumber}
            className="font-medium text-ink-700 hover:text-ink-900"
          >
            Change number
          </button>
          {secondsLeft > 0 ? (
            <span className="text-ink-500">Resend OTP in {secondsLeft}s</span>
          ) : (
            <button
              type="button"
              onClick={() => {
                // TODO: request a new code from the OTP backend.
                setDigits(Array(OTP_LENGTH).fill(""));
                setSecondsLeft(RESEND_SECONDS);
                inputs.current[0]?.focus();
              }}
              className="font-semibold text-accent hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export function BookDemoButton({ className, children, variant = "demo" }: Props) {
  const isRegister = variant === "register";
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [otpMobile, setOtpMobile] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const titleId = useId();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setSubmitted(false);
          setOtpMobile(null);
          setOpen(true);
        }}
        className={className}
      >
        {children ?? "Book a demo"}
      </button>

      {open && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4"
        >
          <button
            type="button"
            aria-label="Close dialog"
            onClick={close}
            className="absolute inset-0 h-full w-full bg-ink-900/60 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-md rounded-2xl border border-ink-300/60 bg-white p-6 shadow-card md:p-8">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {submitted ? (
              <div className="py-4 text-center">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-accent/15 text-accent">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-10 w-10"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10l4 4 8-8"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  id={titleId}
                  className="mt-5 text-xl font-bold text-ink-900"
                >
                  {isRegister
                    ? "Thank you for subscribing to LOTS247 RoadCare"
                    : "Our team will get in touch with you"}
                </h3>
                {isRegister ? (
                  <>
                    <p className="mt-2 text-[14px] text-ink-700">
                      You can log in to your dashboard using the button below.
                    </p>
                    <a
                      href="https://dashboard.lots247.in/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-6 w-full"
                    >
                      Sign in
                    </a>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={close}
                    className="btn-primary mt-6 w-full"
                  >
                    Done
                  </button>
                )}
              </div>
            ) : (
              <>
                {otpMobile !== null && (
                  <OtpStep
                    mobile={otpMobile}
                    titleId={titleId}
                    onVerified={() => setSubmitted(true)}
                    onChangeNumber={() => setOtpMobile(null)}
                  />
                )}
                <div className={otpMobile !== null ? "hidden" : undefined}>
                  <h3
                    id={otpMobile === null ? titleId : undefined}
                    className="text-xl font-bold text-ink-900"
                  >
                    {isRegister ? "Subscribe to RoadCare" : "Book a demo"}
                  </h3>
                  <form
                    action="/api/book-demo"
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (isRegister) {
                        // TODO: send the OTP via the backend once it is available.
                        const mobile = new FormData(e.currentTarget).get("mobile");
                        setOtpMobile(String(mobile ?? ""));
                      } else {
                        setSubmitted(true);
                      }
                    }}
                    className="mt-5 flex flex-col gap-3"
                  >
                    {isRegister ? (
                      <RegisterFields />
                    ) : (
                      <>
                        <label className="flex flex-col gap-1.5">
                          <span className="text-[13px] font-medium text-ink-700">
                            Full name
                          </span>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="e.g. Rahul Sharma"
                            className="rounded-lg border border-ink-300/60 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                          />
                        </label>
                        <label className="flex flex-col gap-1.5">
                          <span className="text-[13px] font-medium text-ink-700">
                            Email
                          </span>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="you@company.com"
                            className="rounded-lg border border-ink-300/60 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                          />
                        </label>
                        <label className="flex flex-col gap-1.5">
                          <span className="text-[13px] font-medium text-ink-700">
                            Fleet size
                          </span>
                          <select
                            name="fleet_size"
                            defaultValue=""
                            required
                            className="appearance-none rounded-lg border border-ink-300/60 bg-white bg-[right_0.75rem_center] bg-no-repeat px-3.5 py-2.5 pr-9 text-[14px] text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                            style={{
                              backgroundImage:
                                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 20 20' fill='none'><path d='M5 8l5 5 5-5' stroke='rgb(100 116 139 / 0.8)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                            }}
                          >
                            <option value="" disabled>
                              Select fleet size
                            </option>
                            <option className="text-ink-900" value="1-10">
                              1 – 10
                            </option>
                            <option className="text-ink-900" value="11-50">
                              11 – 50
                            </option>
                            <option className="text-ink-900" value="51-200">
                              51 – 200
                            </option>
                            <option className="text-ink-900" value="201-1000">
                              201 – 1000
                            </option>
                            <option className="text-ink-900" value="1000+">
                              1000+
                            </option>
                          </select>
                        </label>
                      </>
                    )}
                    <button type="submit" className="btn-primary mt-2 w-full">
                      {isRegister ? "Get Subscription" : "Request demo"}
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
