"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBookmark,
  FaCheck,
  FaClipboardList,
  FaClock,
  FaDumbbell,
  FaFire,
  FaRunning,
  FaStar,
} from "react-icons/fa";

import { useFitLog } from "@/context/FitLogContext";

interface MyPlanContentProps {
  tab: "plan" | "saved";
}

const MyPlanContent = ({ tab }: MyPlanContentProps) => {
  const { plan, saved } = useFitLog();

  const workouts = tab === "saved" ? saved : plan;

  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <main className="min-h-screen bg-[#101114] px-4 py-10 text-white">
      <div className="container mx-auto">
        <div className="mb-7">
          <h1 className="text-3xl font-black uppercase">My Plan</h1>

          <p className="mt-2 text-xs text-white/40">
            Keep all the workouts you want to do today. Finish them, then load
            more.
          </p>
        </div>

        <div className="mb-7 grid grid-cols-1 overflow-hidden rounded-xl border border-white/5 bg-[#15171C] sm:grid-cols-3">
          <div className="border-b border-white/5 p-5 sm:border-b-0 sm:border-r">
            <div className="flex items-center gap-2">
              <FaDumbbell size={12} className="text-[#C2F800]" />

              <p className="text-[10px] uppercase text-white/40">Exercises</p>
            </div>

            <p className="mt-2 text-2xl font-bold text-[#C2F800]">
              {workouts.length}
            </p>
          </div>

          <div className="border-b border-white/5 p-5 sm:border-b-0 sm:border-r">
            <div className="flex items-center gap-2">
              <FaClock size={12} className="text-[#C2F800]" />

              <p className="text-[10px] uppercase text-white/40">Minutes</p>
            </div>

            <p className="mt-2 text-2xl font-bold">{totalMinutes}</p>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-2">
              <FaFire size={12} className="text-[#C2F800]" />

              <p className="text-[10px] uppercase text-white/40">Calories</p>
            </div>

            <p className="mt-2 text-2xl font-bold">{totalCalories}</p>
          </div>
        </div>

        <div className="mb-7">
          <div className="tabs tabs-box w-fit bg-[#15171C] p-1">
            <Link
              href="/my-plan?tab=plan"
              className={`tab h-10 gap-2 px-6 text-xs font-bold uppercase transition-all ${
                tab === "plan"
                  ? "tab-active bg-[#C2F800] text-black"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <FaClipboardList size={12} />
              Today's Plan
            </Link>

            <Link
              href="/my-plan?tab=saved"
              className={`tab h-10 gap-2 px-6 text-xs font-bold uppercase transition-all ${
                tab === "saved"
                  ? "tab-active bg-[#C2F800] text-black"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <FaBookmark size={12} />
              Saved
            </Link>
          </div>
        </div>

        {workouts.length === 0 ? (
          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-white/5 bg-[#111318] px-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C2F800]/10">
              {tab === "plan" ? (
                <FaRunning size={22} className="text-[#C2F800]" />
              ) : (
                <FaBookmark size={20} className="text-[#C2F800]" />
              )}
            </div>

            <h2 className="mt-5 text-lg font-bold uppercase">
              Nothing here yet
            </h2>

            <p className="mt-2 max-w-sm text-xs text-white/40">
              {tab === "plan"
                ? "Browse the library and add workouts to start building your plan."
                : "Save workouts from the library and they will appear here."}
            </p>

            <Link
              href="/"
              className="mt-5 flex items-center gap-2 rounded-full bg-[#C2F800] px-5 py-2 text-xs font-bold text-black transition hover:bg-[#d4ff3b]"
            >
              Go to workouts
              <FaArrowRight size={10} />
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {workouts.map((exercise) => (
              <div
                key={exercise.id}
                className="flex flex-col gap-4 rounded-xl border border-white/5 bg-[#15171C] p-3 transition hover:border-[#C2F800]/20 md:flex-row md:items-center"
              >
                <Image
                  src={exercise.image}
                  alt={exercise.name}
                  width={112}
                  height={80}
                  className="h-20 w-full rounded-lg object-cover md:w-28"
                />

                <div className="flex-1">
                  <h2 className="text-sm font-bold uppercase">
                    {exercise.name}
                  </h2>

                  <p className="mt-1 text-[10px] text-white/40">
                    {exercise.muscleGroups.join(" • ")}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-white/50">
                    <span className="flex items-center gap-1">
                      <FaClock size={9} />
                      {exercise.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                      <FaFire size={9} />
                      {exercise.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                      <FaStar size={9} className="text-[#C2F800]" />
                      {exercise.rating}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={`/workouts/${exercise.id}`}
                    className="flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-[10px] text-white/70 transition hover:border-[#C2F800] hover:text-[#C2F800]"
                  >
                    View Details
                    <FaArrowRight size={9} />
                  </Link>

                  {tab === "plan" && (
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-md bg-[#C2F800] px-3 py-2 text-[10px] font-bold text-black transition hover:bg-[#d4ff3b]"
                    >
                      <FaCheck size={9} />
                      Mark as Done
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanContent;
