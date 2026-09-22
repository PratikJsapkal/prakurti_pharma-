

export default function Difference() {
    const features = [
  {
    id: 1,
    title: "Expert pharmacists",
    description:
      "Talk through everyday medication questions with a knowledgeable local team.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 4V7M15 4V7M7 8H17C18.1 8 19 8.9 19 10V17C19 18.1 18.1 19 17 19H7C5.9 19 5 18.1 5 17V10C5 8.9 5.9 8 7 8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M8 13H16M12 10V16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Genuine medicines only",
    description:
      "We prioritize trusted supply and appropriate storage from shelf to handover.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
    ),
  },
  {
    id: 3,
    title: "Friendly support",
    description:
      "Warm, respectful help for patients, caregivers, and busy families alike.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 11.5C20 15.64 16.42 19 12 19C10.73 19 9.53 18.72 8.47 18.22L4 20L5.43 16.2C4.53 14.91 4 13.38 4 11.5C4 7.36 7.58 4 12 4C16.42 4 20 7.36 20 11.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
  return (
    <section id="about" className="bg-[#eaf6f1] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">

        {/* Heading */}
        <div className="mb-9 max-w-[650px]">
          <p className="text-[10px] font-semibold tracking-[0.12em] text-[#16885f]">
            THE PRAKRUTI DIFFERENCE
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[#18231f] sm:text-3xl">
            Practical care, delivered with confidence.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-xl border border-[#dcebe4] bg-white p-6 shadow-[0_4px_12px_rgba(20,70,50,0.06)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dff3e8] text-[#16885f]">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-sm font-semibold text-[#202c27]">
                {feature.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#718079]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}