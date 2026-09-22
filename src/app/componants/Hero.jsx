import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden">

      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-animate {
          opacity: 0;
          animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <Image
          src="/pharma-img.png"
          alt="Prakruti Pharma"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ================= LEFT TO RIGHT SHADOW ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-white/10" />

      {/* ================= EXTRA SOFT OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1280px] items-center px-6 py-16 lg:px-10 lg:py-20">

        <div className="max-w-[580px]">

          {/* ================= LABEL ================= */}
          <div
            className="hero-animate mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9e9df] bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-2 w-2 rounded-full bg-[#16885f]" />

            <span className="text-[11px] font-semibold tracking-[0.12em] text-[#16885f]">
              YOUR TRUSTED LOCAL PHARMACY
            </span>
          </div>

          {/* ================= HEADING ================= */}
          <h1
            className="hero-animate max-w-[600px] text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-[#15201c] sm:text-5xl lg:text-[64px]"
            style={{ animationDelay: "0.15s" }}
          >
            Your health.
            <br />
            Our <span className="text-[#16885f]">priority.</span>
          </h1>

          {/* ================= DESCRIPTION ================= */}
          <p
            className="hero-animate mt-6 max-w-[500px] text-base leading-7 text-[#53615b] sm:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            Quality medicines, trusted guidance, and genuine care for you and
            your family. We're here whenever you need us.
          </p>

          {/* ================= BUTTONS ================= */}
          <div
            className="hero-animate mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.42s" }}
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#16885f] px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_20px_rgba(22,136,95,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#117650]"
            >
              Get in touch

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#cbdcd3] bg-white/90 px-6 py-3.5 text-sm font-medium text-[#26332e] shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              Learn more
            </a>
          </div>

          {/* ================= TRUST INFORMATION ================= */}
          <div
            className="hero-animate mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
            style={{ animationDelay: "0.55s" }}
          >

            <div>
              <p className="text-xl font-semibold text-[#15201c]">
                10+
              </p>

              <p className="mt-1 text-xs text-[#66736d]">
                Years of care
              </p>
            </div>

            <div className="h-9 w-px bg-[#cddbd4]" />

            <div>
              <p className="text-xl font-semibold text-[#15201c]">
                1000+
              </p>

              <p className="mt-1 text-xs text-[#66736d]">
                Happy customers
              </p>
            </div>

            <div className="h-9 w-px bg-[#cddbd4]" />

            <div>
              <p className="text-xl font-semibold text-[#15201c]">
                24/7
              </p>

              <p className="mt-1 text-xs text-[#66736d]">
                Support
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}