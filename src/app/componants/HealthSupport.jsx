const services = [
  {
    id: 1,
    title: "Cold & flu",
    description: "Find advice for seasonal comfort and recovery.",
    type: "featured",
  },
  {
    id: 2,
    title: "Pain relief",
    description: "Guidance for safe, everyday comfort choices.",
    type: "dark",
  },
  {
    id: 3,
    title: "Wellness",
    description: "Support healthy routines with thoughtful advice.",
    type: "minimal",
  },
  {
    id: 4,
    title: "Baby care",
    description: "Gentle essentials for little ones and new parents.",
    type: "soft",
  },
];

function ServiceIcon({ id }) {
  if (id === 1) {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 3V15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M9 17.5C9 19.43 10.34 21 12 21C13.66 21 15 19.43 15 17.5C15 16.27 14.43 15.2 13.5 14.55V5C13.5 4.17 12.83 3.5 12 3.5C11.17 3.5 10.5 4.17 10.5 5V14.55C9.57 15.2 9 16.27 9 17.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === 2) {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7 7L17 17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M17 7L7 17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M5 12H19"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    );
  }

  if (id === 3) {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 20C12 20 5 16.2 5 10.3C5 7.8 6.8 6 9.1 6C10.5 6 11.5 6.8 12 8C12.5 6.8 13.5 6 14.9 6C17.2 6 19 7.8 19 10.3C19 16.2 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 4V20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7 7L17 17M17 7L7 17"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

export default function HealthSupport() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] text-[#16885f]">
              EVERYDAY HEALTH SUPPORT
            </p>

            <h2 className="mt-3 max-w-[760px] text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#18231f] sm:text-3xl lg:text-[36px]">
              Helpful care for every chapter of family life.
            </h2>
          </div>

          <a
            href="/contact"
            className="group flex w-fit items-center gap-2 text-xs font-semibold text-[#16885f]"
          >
            Ask a pharmacist
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {

            /* ================= FEATURED ================= */
            if (service.type === "featured") {
              return (
                <article
                  key={service.id}
                  className="group relative flex min-h-[310px] flex-col justify-between overflow-hidden rounded-[22px] border border-[#cfe7da] bg-[#eaf7f0] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(22,136,95,0.10)] sm:min-h-[320px] lg:p-7"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/60" />

                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#16885f] shadow-sm">
                      <ServiceIcon id={service.id} />
                    </div>

                    <span className="mt-6 inline-block rounded-full bg-[#d5eee1] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#16885f]">
                      Seasonal care
                    </span>

                    <h3 className="mt-5 text-lg font-semibold text-[#18231f]">
                      {service.title}
                    </h3>

                    <p className="mt-2 max-w-[240px] text-xs leading-5 text-[#64736c]">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href="/contact"
                    className="relative z-10 flex items-center justify-between border-t border-[#cfe2d8] pt-4 text-[11px] font-semibold text-[#16885f]"
                  >
                    <span>Get guidance</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </article>
              );
            }

            /* ================= DARK ================= */
            if (service.type === "dark") {
              return (
                <article
                  key={service.id}
                  className="group flex min-h-[310px] flex-col justify-between rounded-[22px] bg-[#16885f] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(22,136,95,0.18)] sm:min-h-[320px] lg:p-7"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                      <ServiceIcon id={service.id} />
                    </div>

                    <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#bce5d2]">
                      Everyday comfort
                    </p>

                    <h3 className="mt-4 text-lg font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#d4eee2]">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href="/contact"
                    className="flex items-center justify-between border-t border-white/15 pt-4 text-[11px] font-semibold text-white"
                  >
                    <span>Talk to our team</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </article>
              );
            }

            /* ================= MINIMAL ================= */
            if (service.type === "minimal") {
              return (
                <article
                  key={service.id}
                  className="group flex min-h-[310px] flex-col rounded-[22px] border border-[#dce8e2] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#bcdccc] hover:shadow-[0_18px_40px_rgba(20,70,50,0.07)] sm:min-h-[320px] lg:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bfe0cf] text-[#16885f]">
                      <ServiceIcon id={service.id} />
                    </div>

                    <span className="text-[10px] font-semibold tracking-[0.12em] text-[#a2ada8]">
                      03
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-4 h-px w-10 bg-[#16885f]" />

                    <h3 className="text-lg font-semibold text-[#18231f]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#718079]">
                      {service.description}
                    </p>

                    <a
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold text-[#16885f]"
                    >
                      Explore wellness
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              );
            }

            /* ================= SOFT ================= */
            return (
              <article
                key={service.id}
                className="group flex min-h-[310px] flex-col overflow-hidden rounded-[22px] border border-[#e0e7d9] bg-[#f7f7ee] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(70,80,40,0.08)] sm:min-h-[320px]"
              >
                <div className="p-6 lg:p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#16885f] shadow-sm">
                      <ServiceIcon id={service.id} />
                    </span>

                    <span className="text-[10px] font-semibold text-[#89948e]">
                      FAMILY CARE
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-semibold text-[#18231f]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#718079]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto border-t border-[#e1e5d9] bg-white/60 px-6 py-4 lg:px-7">
                  <a
                    href="/contact"
                    className="flex items-center justify-between text-[11px] font-semibold text-[#16885f]"
                  >
                    <span>Learn more</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}