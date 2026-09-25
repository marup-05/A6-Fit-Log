const LoadingSkeleton = () => {
  return (
    <section className="container mx-auto px-3 py-8 sm:px-4 sm:py-10 md:py-12">
      <div className="mb-5 flex items-center gap-3 sm:mb-6">
        <span className="loading loading-spinner loading-sm text-[#C2F800]" />

        <p className="text-xs font-medium text-white/50 sm:text-sm">
          Loading workouts…
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-xl border border-white/5 bg-[#15171C]"
          >
            <div className="skeleton h-[190px] w-full rounded-none bg-white/5 sm:h-[210px]" />

            <div className="p-3.5 sm:p-4">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="skeleton h-5 w-14 rounded-full bg-white/5 sm:w-16" />

                <div className="skeleton h-5 w-14 rounded-full bg-white/5 sm:w-16" />
              </div>

              <div className="skeleton mt-3 h-4 w-3/4 bg-white/5 sm:mt-4" />

              <div className="skeleton mt-2 h-3 w-1/2 bg-white/5" />

              <div className="my-3 border-t border-white/5 sm:my-4" />

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="skeleton h-3 w-14 bg-white/5" />

                <div className="skeleton h-3 w-16 bg-white/5" />

                <div className="skeleton h-3 w-10 bg-white/5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoadingSkeleton;