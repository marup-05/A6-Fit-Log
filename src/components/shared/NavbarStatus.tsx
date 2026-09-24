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
    <div className="flex items-center gap-5">

      {/* Plan */}
      <Link
        href="/my-plan?tab=plan"
        className={`flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-all duration-200 ${
          isPlan
            ? "text-[#C2F800] shadow-[0_0_12px_rgba(194,248,0,0.35)]"
            : "text-white"
        }`}
      >
        <span>Plan</span>

        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C2F800] px-1.5 text-[10px] font-bold text-black">
          {plan.length}
        </span>
      </Link>

      {/* Saved */}
      <Link
        href="/my-plan?tab=saved"
        className={`flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-all duration-200 ${
          isSaved
            ? "text-[#C2F800] shadow-[0_0_12px_rgba(194,248,0,0.35)]"
            : "text-white"
        }`}
      >
        <span>Saved</span>

        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C2F800] px-1.5 text-[10px] font-bold text-black">
          {saved.length}
        </span>
      </Link>

    </div>
  );
};

export default NavbarStatus;