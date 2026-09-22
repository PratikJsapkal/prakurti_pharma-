import reviewsData from "@/app/Data/Review.json";

export default function Reviews() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">

        {/* Heading */}
        <div className="mx-auto max-w-[600px] text-center">
          <p className="text-[10px] font-semibold tracking-[0.12em] text-[#16885f]">
            KIND WORDS FROM NEIGHBORS
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[#18231f] sm:text-3xl">
            Care people can feel.
          </h2>
        </div>

        {/* Reviews */}
        <div
          className="
            mt-10
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            pb-4
            -mx-4
            px-4
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
            sm:-mx-6
            sm:px-6
            md:mx-0
            md:grid
            md:grid-cols-3
            md:overflow-visible
            md:px-0
            md:pb-0
          "
        >
          {reviewsData.reviews.map((review) => (
            <article
              key={review.id}
              className="
                flex
                w-[85%]
                shrink-0
                snap-center
                flex-col
                rounded-xl
                border
                border-[#dce8e2]
                bg-white
                p-6
                sm:w-[60%]
                md:w-auto
                md:shrink
                md:snap-none
              "
            >
              {/* Stars */}
              <div className="flex gap-1 text-sm text-[#16885f]">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index}>☆</span>
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 flex-1 text-sm leading-6 text-[#4e5b55]">
                “{review.review}”
              </p>

              {/* Name */}
              <p className="mt-6 text-xs font-semibold text-[#202c27]">
                {review.name}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}