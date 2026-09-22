export default function TrustFeatures() {
   const features = [
  {
    id: 1,
    title: "Certified medicines",
    description: "Sourced through approved channels",
    icon: (
      <svg
        width="18"
        height="18"
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
    ),
  },
  {
    id: 2,
    title: "Hygienic storage",
    description: "Temperature-conscious care",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 3V15"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M9 17.5C9 19.43 10.34 21 12 21C13.66 21 15 19.43 15 17.5C15 16.27 14.43 15.2 13.5 14.55V5C13.5 4.17 12.83 3.5 12 3.5C11.17 3.5 10.5 4.17 10.5 5V14.55C9.57 15.2 9 16.27 9 17.5Z"
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
    title: "Pharmacist guidance",
    description: "Clear answers when you need them",
    icon: (
      <svg
        width="18"
        height="18"
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
    ),
  },
];
  return (
    <section className="border-b border-[#e2eee8] bg-[#f1f7f4]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 px-6 sm:grid-cols-3 lg:px-10">

        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex items-center gap-4 py-6 sm:px-6 ${
              index !== 0
                ? "border-t border-[#dce9e2] sm:border-l sm:border-t-0"
                : ""
            }`}
          >
            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#16885f] shadow-sm">
              {feature.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-[12px] font-semibold text-[#1c2924]">
                {feature.title}
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-[#78847f]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}