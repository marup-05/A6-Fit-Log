"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useFitLog } from "../../context/FitLogContext";

const NavbarStatus = () => {
  const { plan, saved } = useFitLog();
  const searchParams = useSearchParams();

  const currentTab = searchParams.get("tab");
  const isPlan = currentTab === "plan";
  const isSaved = currentTab === "saved";

  return (
    <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-5">
      <Link
        href="/my-plan?tab=plan"
        className={`flex items-center gap-1 rounded-md px-1.5 py-1 text-[10px] font-medium transition-all duration-200 sm:gap-1.5 sm:px-2 sm:text-xs md:gap-2 md:text-sm ${
          isPlan
            ? "text-[#C2F800] shadow-[0_0_12px_rgba(194,248,0,0.35)]"
            : "text-white"
        }`}
      >
        <span>Plan</span>

        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C2F800] px-1 text-[8px] font-bold text-black sm:h-5 sm:min-w-5 sm:text-[10px]">
          {plan.length}
        </span>
      </Link>

      <Link
        href="/my-plan?tab=saved"
        className={`flex items-center gap-1 rounded-md px-1.5 py-1 text-[10px] font-medium transition-all duration-200 sm:gap-1.5 sm:px-2 sm:text-xs md:gap-2 md:text-sm ${
          isSaved
            ? "text-[#C2F800] shadow-[0_0_12px_rgba(194,248,0,0.35)]"
            : "text-white"
        }`}
      >
        <span>Saved</span>

        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C2F800] px-1 text-[8px] font-bold text-black sm:h-5 sm:min-w-5 sm:text-[10px]">
          {saved.length}
        </span>
      </Link>
    </div>
  );
};

export default NavbarStatus;
