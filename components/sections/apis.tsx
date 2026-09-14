import Link from "next/link";

const apis = [
  {
    name: "Vehicle RC Verification API",
    desc: "Fetch RC details, ownership, permits and fitness in real time.",
    href: "/apis/vehicle-rc-verification",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M3 13l2-6a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 6" />
        <path d="M5 13h14v5a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H11a2 2 0 0 1-4 0H6a1 1 0 0 1-1-1v-5z" />
        <circle cx="8" cy="17" r="1" />
        <circle cx="16" cy="17" r="1" />
      </svg>
    ),
  },
  {
    name: "Driving Licence Verification API",
    desc: "Verify DL validity, class and holder details across all states.",
    href: "/apis/driving-license",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="12" r="2.25" />
        <path d="M14 10h4M14 13h4M6.5 16.5c.6-1.3 1.7-2 2.5-2s1.9.7 2.5 2" />
      </svg>
    ),
  },
  {
    name: "Vehicle Challan Check API",
    desc: "Pull pending, resolved and court challans across 28 states.",
    href: "/apis/challan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M15 3v4h4" />
        <path d="M9 12h6M9 16h6M9 8h3" />
      </svg>
    ),
  },
];

export function ApisSection() {
  return (
    <section className="section relative overflow-hidden bg-ink-900 text-white">
      <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:gap-28">
        <div>
          <h2 className="h2 text-white">
            Integrate legal infrastructure into your product
          </h2>
          <ul className="mt-8 flex flex-col gap-4">
            {apis.map((a) => (
              <li key={a.name}>
                <Link
                  href={a.href}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-accent/40 hover:bg-white/[0.06]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                    {a.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[16px] font-semibold text-white">
                      {a.name}
                    </div>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-white/65">
                      {a.desc}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white/80 transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:translate-x-0.5"
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                      <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center justify-center">
          <div aria-hidden="true" className="integration-stream pointer-events-none">
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" fill="none">
              <defs>
                <path id="wire1" d="M 40 -30 C 70 80, 140 160, 180 200 C 220 240, 70 320, 40 430" />
                <path id="wire2" d="M 200 -30 C 215 90, 190 165, 200 200 C 210 235, 185 310, 200 430" />
                <path id="wire3" d="M 360 -30 C 330 80, 260 160, 220 200 C 180 240, 330 320, 360 430" />
              </defs>

              <use href="#wire1" className="integration-wire integration-wire-1" />
              <use href="#wire2" className="integration-wire integration-wire-2" />
              <use href="#wire3" className="integration-wire integration-wire-3" />

              <g className="integration-packet" style={{ color: "rgb(44,183,125)" }}>
                <circle r="4" fill="currentColor">
                  <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#wire1" />
                  </animateMotion>
                </circle>
              </g>
              <g className="integration-packet" style={{ color: "rgb(44,183,125)" }}>
                <circle r="3" fill="currentColor" opacity="0.7">
                  <animateMotion dur="7s" repeatCount="indefinite" begin="-3.5s" rotate="auto">
                    <mpath href="#wire1" />
                  </animateMotion>
                </circle>
              </g>

              <g className="integration-packet" style={{ color: "rgb(247,151,39)" }}>
                <circle r="4" fill="currentColor">
                  <animateMotion dur="9s" repeatCount="indefinite" begin="-2s" rotate="auto">
                    <mpath href="#wire2" />
                  </animateMotion>
                </circle>
              </g>
              <g className="integration-packet" style={{ color: "rgb(247,151,39)" }}>
                <circle r="3" fill="currentColor" opacity="0.7">
                  <animateMotion dur="9s" repeatCount="indefinite" begin="-6.5s" rotate="auto">
                    <mpath href="#wire2" />
                  </animateMotion>
                </circle>
              </g>

              <g className="integration-packet" style={{ color: "rgb(130,170,255)" }}>
                <circle r="4" fill="currentColor">
                  <animateMotion dur="8s" repeatCount="indefinite" begin="-1s" rotate="auto">
                    <mpath href="#wire3" />
                  </animateMotion>
                </circle>
              </g>
              <g className="integration-packet" style={{ color: "rgb(130,170,255)" }}>
                <circle r="3" fill="currentColor" opacity="0.7">
                  <animateMotion dur="8s" repeatCount="indefinite" begin="-5s" rotate="auto">
                    <mpath href="#wire3" />
                  </animateMotion>
                </circle>
              </g>
            </svg>
          </div>
          <div className="relative w-full rounded-2xl bg-[#141B32] p-5 shadow-2xl ring-1 ring-white/10">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF6B6B]" />
            <span className="h-3 w-3 rounded-full bg-[#FFC24D]" />
            <span className="h-3 w-3 rounded-full bg-[#6BE07E]" />
            <span className="ml-auto text-xs text-white/50">
              POST /v1/challans
            </span>
          </div>
          <pre className="mt-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-[#EEFFFF]">
<code>
<span className="text-[#C792EA]">import</span>
<span className="text-[#89DDFF]">{" { "}</span>
<span className="text-[#FFCB6B]">LOTS247</span>
<span className="text-[#89DDFF]">{" } "}</span>
<span className="text-[#C792EA]">from</span>
<span className="text-[#C3E88D]">{' "@lots247/sdk"'}</span>
<span className="text-[#89DDFF]">;</span>
{"\n\n"}
<span className="text-[#C792EA]">const</span>
<span className="text-[#EEFFFF]">{" lots "}</span>
<span className="text-[#89DDFF]">=</span>
<span className="text-[#C792EA]">{" new "}</span>
<span className="text-[#FFCB6B]">LOTS247</span>
<span className="text-[#89DDFF]">{"({ "}</span>
<span className="text-[#EEFFFF]">apiKey</span>
<span className="text-[#89DDFF]">{" });"}</span>
{"\n\n"}
<span className="text-[#C792EA]">const</span>
<span className="text-[#EEFFFF]">{" challans "}</span>
<span className="text-[#89DDFF]">=</span>
<span className="text-[#C792EA]">{" await "}</span>
<span className="text-[#EEFFFF]">lots</span>
<span className="text-[#89DDFF]">.</span>
<span className="text-[#EEFFFF]">challans</span>
<span className="text-[#89DDFF]">.</span>
<span className="text-[#82AAFF]">list</span>
<span className="text-[#89DDFF]">{"({"}</span>
{"\n  "}
<span className="text-[#F07178]">vehicleNumber</span>
<span className="text-[#89DDFF]">:</span>
<span className="text-[#C3E88D]">{' "DL01AB1234"'}</span>
<span className="text-[#89DDFF]">,</span>
{"\n  "}
<span className="text-[#F07178]">state</span>
<span className="text-[#89DDFF]">:</span>
<span className="text-[#C3E88D]">{' "DL"'}</span>
<span className="text-[#89DDFF]">,</span>
{"\n"}
<span className="text-[#89DDFF]">{"});"}</span>
{"\n\n"}
<span className="text-[#676E95] italic">{"// → { pending: 2, resolved: 5, total: 7 }"}</span>
</code>
          </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
