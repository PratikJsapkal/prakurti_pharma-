export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-white px-4 pb-16 sm:px-6 lg:px-10 lg:pb-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-7 rounded-2xl bg-[#16885f] px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-9">

          {/* Text */}
          <div>
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
              Get trusted medicines at your doorstep.
            </h2>

            <p className="mt-2 max-w-[600px] text-xs leading-5 text-[#c9eadb] sm:text-sm">
              Call, visit, or send us a note to ask about local delivery and
              pharmacist guidance.
            </p>
          </div>

          {/* Button */}
          <a
            href="/contact"
            className="flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-xs font-semibold text-[#202c27] transition-colors hover:bg-[#f0f7f3] sm:w-fit"
          >
            Contact Prakruti

            <svg
              width="14"
              height="14"
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

        </div>
      </div>
    </section>
  );
}