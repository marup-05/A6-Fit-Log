"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <div className="flex items-center gap-1 sm:gap-3 md:gap-6 lg:gap-8">
      <Link
        href="/"
        className={`rounded-md px-1.5 py-1 text-[10px] font-medium transition-all duration-200 sm:px-2 sm:text-xs md:text-sm ${
          isHome
            ? "text-[#C2F800] shadow-[0_0_12px_rgba(194,248,0,0.35)]"
            : "text-white"
        }`}
      >
        Workouts
      </Link>

      <Link
        href="/my-plan"
        className={`rounded-md px-1.5 py-1 text-[10px] font-medium transition-all duration-200 sm:px-2 sm:text-xs md:text-sm ${
          isMyPlan
            ? "text-[#C2F800] shadow-[0_0_12px_rgba(194,248,0,0.35)]"
            : "text-white"
        }`}
      >
        My Plan
      </Link>
    </div>
  );
};

export default NavbarLinks;
