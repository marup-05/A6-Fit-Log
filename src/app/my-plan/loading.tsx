const MyPlanLoading = () => {
  return (
    <main className="min-h-screen bg-[#101114] px-4 py-10 text-white">
      <div className="container mx-auto">
        <div className="mb-7">
          <div className="skeleton h-9 w-32 bg-white/5" />

          <div className="skeleton mt-3 h-3 w-80 max-w-full bg-white/5" />
        </div>

        <div className="mb-7 grid grid-cols-1 overflow-hidden rounded-xl border border-white/5 bg-[#15171C] sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-5">
              <div className="skeleton h-3 w-20 bg-white/5" />

              <div className="skeleton mt-3 h-8 w-12 bg-white/5" />
            </div>
          ))}
        </div>

        <div className="mb-7 flex items-center justify-between">
          <div className="skeleton h-12 w-52 bg-white/5" />

          <div className="skeleton h-9 w-36 bg-white/5" />
        </div>

        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col gap-4 rounded-xl border border-white/5 bg-[#15171C] p-3 md:flex-row md:items-center"
            >
              <div className="skeleton h-20 w-full bg-white/5 md:w-28" />

              <div className="flex-1">
                <div className="skeleton h-4 w-40 bg-white/5" />

                <div className="skeleton mt-2 h-3 w-32 bg-white/5" />

                <div className="skeleton mt-3 h-3 w-48 bg-white/5" />
              </div>

              <div className="flex gap-2">
                <div className="skeleton h-8 w-24 bg-white/5" />
                <div className="skeleton h-8 w-24 bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MyPlanLoading;
