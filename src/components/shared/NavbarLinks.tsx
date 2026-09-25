"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <div className="flex items-center gap-8">
      {/* Workouts */}
      <Link
        href="/"
        className={`rounded-md px-2 py-1 text-sm font-medium transition-all duration-200 ${
          isHome
            ? "text-[#C2F800] shadow-[0_0_12px_rgba(194,248,0,0.35)]"
            : "text-white"
        }`}
      >
        Workouts
      </Link>

      {/* My Plan */}
      <Link
        href="/my-plan"
        className={`rounded-md px-2 py-1 text-sm font-medium transition-all duration-200 ${
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