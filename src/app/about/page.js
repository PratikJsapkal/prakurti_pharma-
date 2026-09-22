import Image from "next/image";

import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#18231f]">
      <Navbar />

      <main>

        {/* =====================================================
            TOP ABOUT BANNER
        ===================================================== */}
        <section className="relative h-[200px] overflow-hidden sm:h-[200px] lg:h-[390px]">

          {/* Background Image */}
          <Image
            src="/heroimage.png"
            alt="Prakruti Pharma"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/25" />


          {/* Banner Content */}
          <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-6 lg:px-10">

            <div className="max-w-[650px]">

              <p className="mb-3 text-[9px] font-semibold tracking-[0.16em] text-[#16885f] sm:text-[10px]">
                PRAKRUTI PHARMA
              </p>

              <h1 className="text-4xl font-semibold tracking-[-0.035em] text-[#18231f] sm:text-5xl lg:text-[52px]">
                About
              </h1>

              <div className="mt-4 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.08em] text-[#68766f]">
                <a
                  href="/"
                  className="transition-colors hover:text-[#16885f]"
                >
                  Home
                </a>

                <span className="text-[#aab5b0]">›</span>

                <span className="text-[#16885f]">
                  About
                </span>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            MAIN ABOUT CONTENT
        ===================================================== */}
        <section className="bg-white px-6 py-14 sm:py-16 lg:px-10 lg:py-20">

          <div className="mx-auto max-w-[1120px]">

            {/* ================= TOP CONTENT ================= */}
            <div className="grid gap-10 lg:grid-cols-[330px_1fr] lg:gap-12 xl:grid-cols-[360px_1fr]">

              {/* =================================================
                  LEFT PHARMACY CARD
              ================================================= */}
              <div className="mx-auto w-full max-w-[360px]">

                <div className="overflow-hidden rounded-[8px] border border-[#e0e9e4] bg-white shadow-[0_12px_35px_rgba(30,70,50,0.08)]">

                  <div className="relative h-[390px] sm:h-[430px]">

                    <Image
                      src="/doctor.jpg"
                      alt="Prakruti Pharma pharmacist"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />

                  </div>

                  <div className="px-5 py-5">

                    <h2 className="text-base font-semibold text-[#18231f]">
                      Prakruti Pharma
                    </h2>

                    <p className="mt-1 text-[9px] font-semibold tracking-[0.12em] text-[#16885f]">
                      TRUSTED LOCAL PHARMACY
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  RIGHT CONTENT
              ================================================= */}
              <div>

                {/* Introduction */}
                <p className="text-[11px] leading-6 text-[#718079] sm:text-xs sm:leading-6">
                  Prakruti Pharma is a trusted local pharmacy focused on
                  providing genuine medicines, dependable service, and
                  approachable pharmacist guidance. We believe that getting
                  the right medicine should be simple, clear, and comfortable
                  for every patient and family.
                </p>

                <p className="mt-4 text-[11px] leading-6 text-[#718079] sm:text-xs sm:leading-6">
                  From everyday prescriptions to ongoing medication needs, our
                  team takes care to understand what you need and provide
                  support with professionalism and respect.
                </p>


                {/* =================================================
                    CONTACT INFORMATION
                ================================================= */}
                <div className="mt-7 grid gap-x-10 gap-y-4 border-b border-[#e4ebe7] pb-6 sm:grid-cols-2">

                  {/* Phone */}
                  <div className="flex items-start gap-3">

                    <span className="mt-0.5 text-[10px] font-semibold text-[#16885f]">
                      Phone
                    </span>

                    <a
                      href="tel:+919021981286"
                      className="text-[10px] text-[#7b8781] transition-colors hover:text-[#16885f]"
                    >
                      9021981286
                    </a>

                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">

                    <span className="mt-0.5 text-[10px] font-semibold text-[#16885f]">
                      Email
                    </span>

                    <a
                      href="mailto:hello@example.com"
                      className="break-all text-[10px] text-[#7b8781] transition-colors hover:text-[#16885f]"
                    >
                      hello@example.com
                    </a>

                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 sm:col-span-2">

                    <span className="mt-0.5 shrink-0 text-[10px] font-semibold text-[#16885f]">
                      Address
                    </span>

                    <p className="text-[10px] leading-5 text-[#7b8781]">
                      Office no. 5, Cabin no. 4 and 5, Jain Chamber,
                      1st floor, S.V. Road, Bandra (W), Mumbai - 400050
                    </p>

                  </div>

                </div>


                {/* =================================================
                    PRAKRUTI PHARMA INTRO
                ================================================= */}
                <div className="mt-7">

                  <h2 className="text-lg font-semibold tracking-[-0.02em] text-[#16885f] sm:text-xl">
                    Prakruti Pharma
                  </h2>

                  <p className="mt-4 text-[11px] leading-6 text-[#718079] sm:text-xs sm:leading-6">
                    Our approach is built around three simple principles:
                    genuine medicines, responsible handling, and personal
                    support. We want every visit to feel straightforward and
                    every customer to leave with confidence.
                  </p>

                  {/* Check List */}
                  <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">

                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#16885f]">✓</span>
                      <span className="text-[10px] leading-4 text-[#53615b]">
                        Genuine medicines from trusted sources
                      </span>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#16885f]">✓</span>
                      <span className="text-[10px] leading-4 text-[#53615b]">
                        Pharmacist guidance when you need it
                      </span>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#16885f]">✓</span>
                      <span className="text-[10px] leading-4 text-[#53615b]">
                        Careful and responsible medicine handling
                      </span>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#16885f]">✓</span>
                      <span className="text-[10px] leading-4 text-[#53615b]">
                        Friendly support for patients and families
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* =====================================================
                BOTTOM FEATURE ICONS
            ===================================================== */}
            <div className="mt-12 grid grid-cols-1 gap-4 border-t border-[#e5ece8] pt-8 sm:grid-cols-3">

              {/* Feature 1 */}
              <div className="flex items-center gap-4 sm:justify-center">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7f5ed] text-[#16885f]">

                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 3L19 6V11C19 15.5 16.1 19.4 12 21C7.9 19.4 5 15.5 5 11V6L12 3Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </div>

                <div>
                  <p className="text-xs font-semibold text-[#202c27]">
                    Genuine medicines
                  </p>

                  <p className="mt-1 text-[9px] text-[#7b8781]">
                    Trusted supply
                  </p>
                </div>

              </div>


              {/* Feature 2 */}
              <div className="flex items-center gap-4 sm:justify-center">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7f5ed] text-[#16885f]">

                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="8"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M5 20C5 16.69 7.69 14 11 14H13C16.31 14 19 16.69 19 20"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                  </svg>

                </div>

                <div>
                  <p className="text-xs font-semibold text-[#202c27]">
                    Pharmacist guidance
                  </p>

                  <p className="mt-1 text-[9px] text-[#7b8781]">
                    Clear support
                  </p>
                </div>

              </div>


              {/* Feature 3 */}
              <div className="flex items-center gap-4 sm:justify-center">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7f5ed] text-[#16885f]">

                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 11.5C20 15.64 16.42 19 12 19C10.73 19 9.53 18.72 8.47 18.22L4 20L5.43 16.2C4.53 14.91 4 13.38 4 11.5C4 7.36 7.58 4 12 4C16.42 4 20 7.36 20 11.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M9 11.5H15"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                  </svg>

                </div>

                <div>
                  <p className="text-xs font-semibold text-[#202c27]">
                    Friendly care
                  </p>

                  <p className="mt-1 text-[9px] text-[#7b8781]">
                    Always approachable
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            SIMPLE CTA
        ===================================================== */}
        <section className="bg-[#f1f7f4] px-6 py-12 lg:px-10 lg:py-16">

          <div className="mx-auto flex max-w-[1120px] flex-col gap-6 rounded-[18px] bg-[#16885f] px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

            <div>
              <p className="text-[9px] font-semibold tracking-[0.14em] text-[#bce5d2]">
                NEED HELP?
              </p>

              <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                We're here when you need us.
              </h2>

              <p className="mt-2 max-w-[560px] text-xs leading-5 text-[#c9eadb]">
                Have a question about a prescription or need help with your
                medicine? Speak with our team.
              </p>
            </div>

            <a
              href="/contact"
              className="flex shrink-0 items-center justify-center gap-2 rounded-[9px] bg-white px-6 py-3 text-xs font-semibold text-[#202c27] transition-all hover:-translate-y-0.5 hover:bg-[#f2f8f5]"
            >
              Contact us
              <span>→</span>
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}