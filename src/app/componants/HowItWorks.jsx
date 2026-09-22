import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Visit or call us",
    description: "Tell us how we can help.",
    label: "START HERE",
    image: "/callforvisit.jpg",
  },
  {
    id: "02",
    title: "Share your prescription",
    description: "Bring it in or speak with our team.",
    label: "YOUR NEED",
    image: "/share.jpg",
  },
  {
    id: "03",
    title: "Pharmacist verifies",
    description: "We carefully review the details.",
    label: "OUR CHECK",
    image: "/verify.jpg",
  },
  {
    id: "04",
    title: "Collect from our store",
    description: "Take accurate medicine from our store.",
    label: "DONE",
    image: "/collect.jpg",
  },
];

function StepIcon({ index }) {
  if (index === 0) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 6.5C5 5.67 5.67 5 6.5 5H17.5C18.33 5 19 5.67 19 6.5V17.5C19 18.33 18.33 19 17.5 19H6.5C5.67 19 5 18.33 5 17.5V6.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8 9H16M8 13H13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 4H17C18.1 4 19 4.9 19 6V18C19 19.1 18.1 20 17 20H7C5.9 20 5 19.1 5 18V6C5 4.9 5.9 4 7 4Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8.5 8H15.5M8.5 12H15.5M8.5 16H12"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12L9 16L19 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 7H19V19H5V7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8 7V5H16V7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 12L11 15L16 10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-[#edf7f2] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">

        {/* ================= HEADER ================= */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">

          <div>
            <p className="text-[9px] font-semibold tracking-[0.14em] text-[#16885f] sm:text-[10px]">
              HOW IT WORKS
            </p>

            <h2 className="mt-2 max-w-[470px] text-[24px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#18231f] sm:mt-3 sm:text-3xl lg:text-[38px]">
              Simple support from the first conversation.
            </h2>

            <p className="mt-4 max-w-[440px] text-xs leading-5 text-[#6f7e77] sm:mt-5 sm:text-sm sm:leading-6">
              We make it easy to ask, verify, and collect the medication
              support you need.
            </p>
          </div>

          {/* Desktop process indicator */}
          <div className="hidden items-center justify-end gap-3 lg:flex">
            <span className="h-2 w-2 rounded-full bg-[#16885f]" />
            <span className="h-px w-12 bg-[#b9d9ca]" />
            <span className="h-2 w-2 rounded-full bg-[#16885f]" />
            <span className="h-px w-12 bg-[#b9d9ca]" />
            <span className="h-2 w-2 rounded-full bg-[#16885f]" />
            <span className="h-px w-12 bg-[#b9d9ca]" />
            <span className="h-2 w-2 rounded-full bg-[#16885f]" />
            <span className="ml-2 text-[10px] font-semibold tracking-[0.1em] text-[#718079]">
              4 SIMPLE STEPS
            </span>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-7 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-3 lg:mt-12">

          {steps.map((step, index) => (
            <article
              key={step.id}
              className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-[10px]
                border
                border-[#d6e7df]
                bg-white
                shadow-[0_3px_12px_rgba(30,80,55,0.035)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#b9d9ca]
                hover:shadow-[0_12px_28px_rgba(30,80,55,0.08)]
                sm:rounded-[14px]
              "
            >

              {/* ================= IMAGE ================= */}
              <div className="relative aspect-[20/10] w-full overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
              </div>

              {/* ================= TEXT WRAPPER ================= */}
              <div className="relative flex flex-1 flex-col p-2.5 sm:p-3.5 lg:p-4">

                {/* Top row */}
                <div className="relative z-10 flex items-start justify-between">

                  {/* Number */}
                  <div className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#e9f6ef]
                    text-[8px]
                    font-semibold
                    text-[#16885f]
                    sm:h-6
                    sm:w-6
                    sm:text-[10px]
                  ">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-[#dcebe3]
                    bg-white
                    text-[#16885f]
                    sm:h-6
                    sm:w-6
                  ">
                    <StepIcon index={index} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto pt-2 sm:pt-3">

                  <p className="text-[6px] font-semibold tracking-[0.1em] text-[#16885f] sm:text-[8px]">
                    {step.label}
                  </p>

                  <h3 className="
                    mt-1
                    text-[10px]
                    font-semibold
                    leading-3.5
                    tracking-[-0.01em]
                    text-[#18231f]
                    sm:mt-1.5
                    sm:text-[13px]
                    sm:leading-normal
                  ">
                    {step.title}
                  </h3>

                  <p className="
                    mt-0.5
                    text-[8px]
                    leading-3.5
                    text-[#718079]
                    sm:mt-1
                    sm:text-[11px]
                    sm:leading-4
                  ">
                    {step.description}
                  </p>
                </div>

                {/* Bottom progress */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden bg-[#f1f6f3]">
                  <div className="h-full w-0 bg-[#16885f] transition-all duration-500 group-hover:w-full" />
                </div>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}