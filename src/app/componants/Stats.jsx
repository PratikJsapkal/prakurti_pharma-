
export default function Stats() {
    const stats = [
  {
    id: 1,
    value: "4+",
    label: "years of dependable care",
    heading: "Serving our community",
  },
  {
    id: 2,
    value: "10K+",
    label: "patients supported",
    heading: "Welcoming local families",
  },
  {
    id: 3,
    value: "98%",
    label: "customer satisfaction",
    heading: "Care worth recommending",
  },
];
  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="overflow-hidden rounded-2xl bg-[#16885f] shadow-[0_12px_35px_rgba(22,136,95,0.08)]">

          <div className="grid grid-cols-1 md:grid-cols-3">

            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`
                  relative px-6 py-7
                  sm:px-8 sm:py-8
                  lg:px-10 lg:py-9
                  ${
                    index !== stats.length - 1
                      ? "border-b border-[#3ca477] md:border-b-0 md:border-r"
                      : ""
                  }
                `}
              >

                {/* Heading */}
                <p className="text-[10px] font-medium tracking-wide text-[#bde8d4] sm:text-[11px]">
                  {stat.heading}
                </p>

                {/* Number */}
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[38px]">
                    {stat.value}
                  </span>
                </div>

                {/* Label */}
                <p className="mt-2 text-[11px] leading-5 text-[#c9ebdc] sm:text-xs">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}