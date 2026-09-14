"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { BookDemoButton } from "@/components/book-demo-button";

const steps = [
  {
    title: "Create your account",
    desc: "Sign up in a minute with your name, mobile number, business and state — no paperwork, no calls.",
    image: {
      src: "/device-step-1.webp",
      width: 1471,
      height: 2582,
      alt: "LOTS247 mobile app — Create your account screen",
    },
  },
  {
    title: "Verify your number",
    desc: "Enter the 4-digit OTP we send to your phone and your account is secure from day one.",
    image: {
      src: "/device-step-otp.webp",
      width: 1471,
      height: 2582,
      alt: "LOTS247 mobile app — OTP verification screen",
    },
  },
  {
    title: "Choose your plan",
    desc: "Activate Sarathi at just ₹3/day for 24×7 on-call, on-site legal and challan resolution.",
    image: {
      src: "/device-step-plan.webp",
      width: 1471,
      height: 2582,
      alt: "LOTS247 mobile app — Choose your Sarathi plan screen",
    },
  },
  {
    title: "Track everything from one dashboard",
    desc: "Monitor challans, RC, insurance, PUC, permits and DL validity from a live compliance score.",
    image: {
      src: "/device-step-3.webp",
      width: 1471,
      height: 2582,
      alt: "LOTS247 mobile app — Fleet compliance dashboard",
    },
  },
];

const AUTOPLAY_MS = 5000;

export function HowItWorks() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h2 text-ink-900">
            Go live on LOTS247 in four simple steps
          </h2>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ol className="grid grid-cols-[40px_1fr] gap-x-5">
            {steps.map((s, i) => {
              const isActive = i === active;
              const isDone = i < active;
              const isLast = i === steps.length - 1;
              return (
                <Fragment key={s.title}>
                  <div className="flex flex-col items-center pt-2">
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-[15px] font-bold transition-colors ${
                        isActive || isDone
                          ? "bg-accent text-white"
                          : "bg-white text-ink-700 ring-1 ring-ink-300"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {!isLast ? (
                      <div className="relative mt-2 w-[3px] flex-1 min-h-[36px] rounded-full bg-accent/25">
                        <div
                          className={`absolute inset-x-0 top-0 rounded-full bg-accent transition-all duration-500 ease-out ${
                            isActive || isDone ? "h-full" : "h-0"
                          }`}
                        />
                      </div>
                    ) : null}
                  </div>
                  <li className="pb-0 pt-2">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={`group w-full rounded-2xl px-5 py-2.5 text-left transition-colors ${
                        isActive ? "bg-surface-alt" : "hover:bg-surface-alt/60"
                      }`}
                    >
                      <div
                        className={`text-[17px] font-semibold transition-colors ${
                          isActive ? "text-ink-900" : "text-ink-700"
                        }`}
                      >
                        {s.title}
                      </div>
                    </button>
                  </li>
                </Fragment>
              );
            })}
            </ol>

            <div className="mt-16 pl-[60px]">
              <BookDemoButton className="btn-primary flex w-full max-w-sm items-center justify-center gap-2">
                Book a demo
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    d="M4 10h12m0 0l-4-4m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </BookDemoButton>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-[340px] rounded-[28px] px-4 py-4 md:px-5 md:py-5 lg:max-w-[360px]"
            style={{
              background:
                "linear-gradient(135deg, #E8F5EC 0%, #F5F9F2 45%, #FDF8E9 100%)",
            }}
          >
            <div className="relative mx-auto flex w-full max-w-[280px] items-center justify-center lg:max-w-[300px]">
              {steps.map((s, i) => (
                <Image
                  key={s.image.src}
                  src={s.image.src}
                  alt={s.image.alt}
                  width={s.image.width}
                  height={s.image.height}
                  priority={i === 0}
                  className={`h-auto w-full transition-opacity duration-500 ${
                    i === active
                      ? "opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
