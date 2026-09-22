import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#18231f]">
      <Navbar />

      <main>

        {/* =====================================================
            CONTACT / MAP SECTION
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#f3f8f5]">

          {/* ================= MAP ================= */}
          <div className="relative h-[260px] w-full sm:h-[320px] md:absolute md:inset-0 md:h-full">

            <iframe
              title="Prakruti Pharma Location"
              src="https://www.google.com/maps?q=Jain+Chamber+SV+Road+Bandra+West+Mumbai+400050&output=embed"
              className="h-full w-full border-0 grayscale-[10%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[#12382b]/10" />

          </div>


          {/* ================= DESKTOP OVERLAY ================= */}
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-white/20 via-transparent to-[#12382b]/10 md:block" />


          {/* ================= CONTENT ================= */}
          <div className="relative z-10 mx-auto max-w-[1100px] px-4 py-8 sm:px-6 sm:py-10 md:flex md:min-h-[760px] md:items-center md:px-8 md:py-16">

            <div className="w-full overflow-hidden rounded-[18px] border border-[#e0e9e4] bg-white shadow-[0_20px_60px_rgba(20,55,42,0.14)] md:grid md:grid-cols-[310px_1fr] md:rounded-[6px] lg:grid-cols-[330px_1fr]">


              {/* =================================================
                  LEFT CONTACT INFORMATION
              ================================================= */}
              <div className="bg-white px-5 py-7 sm:px-7 sm:py-8 md:px-8 md:py-9 lg:px-9">

                <div className="max-w-[500px]">

                  <p className="text-[9px] font-semibold tracking-[0.15em] text-[#16885f] sm:text-[10px]">
                    GET IN TOUCH
                  </p>

                  <h1 className="mt-2 text-[24px] font-semibold tracking-[-0.03em] text-[#18231f] sm:text-[27px]">
                    Contact Us
                  </h1>

                  <p className="mt-2 max-w-[420px] text-[10px] leading-5 text-[#718079] sm:text-[11px]">
                    Have a question or need help with your medicine?
                    We're happy to hear from you.
                  </p>


                  {/* =================================================
                      CONTACT DETAILS
                  ================================================= */}
                  <div className="mt-7 space-y-5">

                    {/* PHONE */}
                    <div className="flex items-start gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7f5ed] text-[#16885f]">

                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6.7 3.5L9.2 3C9.7 2.9 10.2 3.2 10.4 3.7L11.5 7C11.7 7.5 11.5 8 11.1 8.3L9.5 9.5C10.4 11.4 12 13 13.9 13.9L15.1 12.3C15.4 11.9 15.9 11.7 16.4 11.9L19.7 13C20.2 13.2 20.5 13.7 20.4 14.2L19.9 16.8C19.8 17.4 19.3 17.8 18.7 17.8C10.5 17.8 4.2 11.5 4.2 3.3C4.2 2.7 4.6 2.2 5.2 2.1L6.7 3.5Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                      </div>

                      <div className="min-w-0">

                        <p className="text-[11px] font-semibold text-[#202c27]">
                          Phone Number
                        </p>

                        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">

                          <a
                            href="tel:+919021981286"
                            className="text-[10px] text-[#78847f] transition-colors hover:text-[#16885f]"
                          >
                            +91 9021981286
                          </a>

                        </div>

                      </div>

                    </div>


                    {/* LOCATION */}
                    <div className="flex items-start gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7f5ed] text-[#16885f]">

                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 21C12 21 19 14.7 19 9.5C19 5.91 15.87 3 12 3C8.13 3 5 5.91 5 9.5C5 14.7 12 21 12 21Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          />

                          <circle
                            cx="12"
                            cy="9"
                            r="2.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          />
                        </svg>

                      </div>

                      <div className="min-w-0">

                        <p className="text-[11px] font-semibold text-[#202c27]">
                          Our Location
                        </p>

                        <p className="mt-1 text-[10px] leading-5 text-[#78847f]">
                          Office no. 5, Cabin no. 4 and 5,
                          <br />
                          Jain Chamber, 1st floor,
                          <br />
                          S.V. Road, Bandra (W),
                          <br />
                          Mumbai - 400050
                        </p>

                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Jain+Chamber+SV+Road+Bandra+West+Mumbai+400050"
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-[9px] font-semibold text-[#16885f]"
                        >
                          Open in Maps
                          <span>↗</span>
                        </a>

                      </div>

                    </div>


                    {/* EMAIL */}
                    <div className="flex items-start gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7f5ed] text-[#16885f]">

                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <rect
                            x="3"
                            y="5"
                            width="18"
                            height="14"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          />

                          <path
                            d="M4 7L12 13L20 7"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                      </div>

                      <div className="min-w-0">

                        <p className="text-[11px] font-semibold text-[#202c27]">
                          Email Address
                        </p>

                        <a
                          href="mailto:hello@example.com"
                          className="mt-1 block break-all text-[10px] text-[#78847f] transition-colors hover:text-[#16885f]"
                        >
                          hello@example.com
                        </a>

                      </div>

                    </div>

                  </div>


                  {/* =================================================
                      SOCIAL
                  ================================================= */}
                  <div className="mt-7 border-t border-[#e7eee9] pt-6">

                    <p className="text-[9px] font-semibold tracking-[0.1em] text-[#8a9690]">
                      FOLLOW US
                    </p>

                    <div className="mt-3 flex gap-2">

                      <a
                        href="#"
                        aria-label="Instagram"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f5ed] text-xs font-semibold text-[#16885f] transition-all hover:bg-[#16885f] hover:text-white"
                      >
                        ◎
                      </a>

                      <a
                        href="#"
                        aria-label="Facebook"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f5ed] text-xs font-semibold text-[#16885f] transition-all hover:bg-[#16885f] hover:text-white"
                      >
                        f
                      </a>

                      <a
                        href="mailto:hello@example.com"
                        aria-label="Email"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f5ed] text-xs font-semibold text-[#16885f] transition-all hover:bg-[#16885f] hover:text-white"
                      >
                        ✉
                      </a>

                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  RIGHT FORM
              ================================================= */}
              <div className="bg-[#17241f] px-5 py-7 sm:px-7 sm:py-8 md:px-8 md:py-9 lg:px-10">

                <p className="text-[9px] font-semibold tracking-[0.15em] text-[#7bd0ad] sm:text-[10px]">
                  SEND US A MESSAGE
                </p>

                <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.03em] text-white sm:text-[27px]">
                  Let's talk.
                </h2>

                <p className="mt-2 max-w-[520px] text-[10px] leading-5 text-[#aebdb6] sm:text-[11px]">
                  Tell us what you need and our team will get back to you
                  as soon as possible.
                </p>


                {/* ================= FORM ================= */}
                <form className="mt-7">

                  {/* MOBILE: 1 COLUMN
                      DESKTOP: 3 COLUMNS */}
                  <div className="grid gap-4 sm:grid-cols-3">

                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[9px] font-medium text-[#c3d0ca]"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="h-11 w-full rounded-[6px] border border-white/10 bg-white px-3 text-[10px] text-[#202c27] outline-none transition-all placeholder:text-[#9aa59f] focus:border-[#55b98e] focus:ring-2 focus:ring-[#55b98e]/20"
                      />
                    </div>


                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[9px] font-medium text-[#c3d0ca]"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="h-11 w-full rounded-[6px] border border-white/10 bg-white px-3 text-[10px] text-[#202c27] outline-none transition-all placeholder:text-[#9aa59f] focus:border-[#55b98e] focus:ring-2 focus:ring-[#55b98e]/20"
                      />
                    </div>


                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[9px] font-medium text-[#c3d0ca]"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        placeholder="Your phone"
                        className="h-11 w-full rounded-[6px] border border-white/10 bg-white px-3 text-[10px] text-[#202c27] outline-none transition-all placeholder:text-[#9aa59f] focus:border-[#55b98e] focus:ring-2 focus:ring-[#55b98e]/20"
                      />
                    </div>

                  </div>


                  {/* MESSAGE */}
                  <div className="mt-4">

                    <label
                      htmlFor="message"
                      className="mb-2 block text-[9px] font-medium text-[#c3d0ca]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full resize-none rounded-[6px] border border-white/10 bg-white px-3 py-3 text-[10px] text-[#202c27] outline-none transition-all placeholder:text-[#9aa59f] focus:border-[#55b98e] focus:ring-2 focus:ring-[#55b98e]/20"
                    />

                  </div>


                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[6px] bg-[#16885f] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-200 hover:bg-[#117650] sm:w-auto"
                  >
                    SEND MESSAGE

                    <svg
                      width="13"
                      height="13"
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

                  </button>

                </form>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            QUICK INFORMATION
        ===================================================== */}
        <section className="bg-white px-5 py-10 sm:px-6 sm:py-12 lg:px-10">

          <div className="mx-auto grid max-w-[1100px] gap-3 sm:grid-cols-3 sm:gap-5">

            {/* VISIT */}
            <div className="rounded-[14px] border border-[#dfe9e4] bg-[#f5f9f7] p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e3f3ea] text-[#16885f]">
                  📍
                </div>

                <p className="text-[10px] font-semibold tracking-[0.08em] text-[#16885f]">
                  VISIT US
                </p>

              </div>

              <p className="mt-3 text-xs font-semibold text-[#202c27]">
                Come speak with our team
              </p>

              <p className="mt-1 text-[10px] leading-5 text-[#78847f]">
                Visit our pharmacy for medicine and pharmacist guidance.
              </p>

            </div>


            {/* CALL */}
            <div className="rounded-[14px] border border-[#dfe9e4] bg-[#f5f9f7] p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e3f3ea] text-[#16885f]">
                  ☎
                </div>

                <p className="text-[10px] font-semibold tracking-[0.08em] text-[#16885f]">
                  CALL US
                </p>

              </div>

              <a
                href="tel:+919021981286"
                className="mt-3 block text-xs font-semibold text-[#202c27]"
              >
                9021981286
              </a>

              <p className="mt-1 text-[10px] leading-5 text-[#78847f]">
                Call us for medicine availability and enquiries.
              </p>

            </div>


            {/* PHARMACIST */}
            <div className="rounded-[14px] border border-[#dfe9e4] bg-[#f5f9f7] p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e3f3ea] text-[#16885f]">
                  ♡
                </div>

                <p className="text-[10px] font-semibold tracking-[0.08em] text-[#16885f]">
                  SUPPORT
                </p>

              </div>

              <p className="mt-3 text-xs font-semibold text-[#202c27]">
                Pharmacist guidance
              </p>

              <p className="mt-1 text-[10px] leading-5 text-[#78847f]">
                Clear answers when you need them.
              </p>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />


      {/* =====================================================
          FLOATING CALL BUTTON
      ===================================================== */}
      <a
        href="tel:+919021981286"
        aria-label="Call Prakruti Pharma"
        className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#16885f] text-white shadow-[0_8px_25px_rgba(22,136,95,0.28)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#117650] sm:bottom-5 sm:right-5 sm:h-12 sm:w-12"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.7 3.5L9.2 3C9.7 2.9 10.2 3.2 10.4 3.7L11.5 7C11.7 7.5 11.5 8 11.1 8.3L9.5 9.5C10.4 11.4 12 13 13.9 13.9L15.1 12.3C15.4 11.9 15.9 11.7 16.4 11.9L19.7 13C20.2 13.2 20.5 13.7 20.4 14.2L19.9 16.8C19.8 17.4 19.3 17.8 18.7 17.8C10.5 17.8 4.2 11.5 4.2 3.3C4.2 2.7 4.6 2.2 5.2 2.1L6.7 3.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

    </div>
  );
}