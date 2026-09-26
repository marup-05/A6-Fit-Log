import Link from "next/link";
import { FaArrowLeft, FaDumbbell, FaSearch } from "react-icons/fa";

export const dynamic = "force-dynamic";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#101114] px-4 text-white">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C2F800]/20 bg-[#C2F800]/10">
          <FaDumbbell size={28} className="text-[#C2F800]" />
        </div>

        <p className="mt-7 text-7xl font-black tracking-tight text-[#C2F800]">
          404
        </p>

        <h1 className="mt-3 text-2xl font-black uppercase">Page Not Found</h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/40">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md bg-[#C2F800] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#d4ff3b]"
          >
            <FaArrowLeft size={10} />
            Back to Workouts
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-md border border-white/10 px-5 py-3 text-xs font-medium text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
          >
            <FaSearch size={10} />
            My Plan
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;