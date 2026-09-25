"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FaArrowRight,
  FaBookmark,
  FaCheck,
  FaChevronDown,
  FaClipboardList,
  FaClock,
  FaDumbbell,
  FaFire,
  FaRunning,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useFitLog } from "../../context/FitLogContext";

interface MyPlanContentProps {
  tab: "plan" | "saved";
}

type SortOption = "default" | "duration" | "calories" | "rating";

const MyPlanContent = ({ tab }: MyPlanContentProps) => {
  const { plan, saved, removeFromPlan, removeFromSaved } = useFitLog();

  const [sortBy, setSortBy] = useState<SortOption>("default");

  const workouts = tab === "saved" ? saved : plan;

  const sortedWorkouts = useMemo(() => {
    const workoutList = [...workouts];

    if (sortBy === "duration") {
      return workoutList.sort((a, b) => b.duration - a.duration);
    }

    if (sortBy === "calories") {
      return workoutList.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    if (sortBy === "rating") {
      return workoutList.sort((a, b) => b.rating - a.rating);
    }

    return workoutList;
  }, [workouts, sortBy]);

  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const handleRemove = (id: number) => {
    if (tab === "plan") {
      removeFromPlan(id);
      toast.info("Removed from today's plan");
    } else {
      removeFromSaved(id);
      toast.info("Removed from saved");
    }
  };

  const handleMarkAsDone = (id: number) => {
    removeFromPlan(id);
    toast.success("Workout marked as done");
  };

  return (
    <main className="min-h-screen bg-[#101114] px-3 py-8 text-white sm:px-4 sm:py-10">
      <div className="container mx-auto">
        <div className="mb-6 sm:mb-7">
          <h1 className="text-2xl font-black uppercase sm:text-3xl">My Plan</h1>

          <p className="mt-2 max-w-md text-[10px] leading-5 text-white/40 sm:text-xs">
            Cap of five lifts for <i>today.</i> Finish <i>them,</i> then load{" "}
            <i>more.</i>
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 overflow-hidden rounded-xl border border-white/5 bg-[#15171C] sm:mb-7 sm:grid-cols-3">
          <div className="border-b border-white/5 p-4 sm:border-b-0 sm:border-r sm:p-5">
            <div className="flex items-center gap-2">
              <FaDumbbell size={11} className="text-[#C2F800]" />

              <p className="text-[9px] uppercase text-white/40 sm:text-[10px]">
                Exercises
              </p>
            </div>

            <p className="mt-2 text-xl font-bold text-[#C2F800] sm:text-2xl">
              {workouts.length}
            </p>
          </div>

          <div className="border-b border-white/5 p-4 sm:border-b-0 sm:border-r sm:p-5">
            <div className="flex items-center gap-2">
              <FaClock size={11} className="text-[#C2F800]" />

              <p className="text-[9px] uppercase text-white/40 sm:text-[10px]">
                Minutes
              </p>
            </div>

            <p className="mt-2 text-xl font-bold sm:text-2xl">{totalMinutes}</p>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-2">
              <FaFire size={11} className="text-[#C2F800]" />

              <p className="text-[9px] uppercase text-white/40 sm:text-[10px]">
                Calories
              </p>
            </div>

            <p className="mt-2 text-xl font-bold sm:text-2xl">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:mb-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="tabs tabs-box w-full bg-[#15171C] p-1 sm:w-fit">
            <Link
              href="/my-plan?tab=plan"
              className={`tab h-9 flex-1 gap-1.5 px-3 text-[10px] font-bold uppercase transition-all sm:h-10 sm:flex-none sm:gap-2 sm:px-6 sm:text-xs ${
                tab === "plan"
                  ? "tab-active bg-[#C2F800] text-black"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <FaClipboardList size={10} />
              Today's Plan
            </Link>

            <Link
              href="/my-plan?tab=saved"
              className={`tab h-9 flex-1 gap-1.5 px-3 text-[10px] font-bold uppercase transition-all sm:h-10 sm:flex-none sm:gap-2 sm:px-6 sm:text-xs ${
                tab === "saved"
                  ? "tab-active bg-[#C2F800] text-black"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <FaBookmark size={10} />
              Saved
            </Link>
          </div>

          <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-start">
            <span className="text-[9px] font-medium uppercase tracking-wider text-white/40 sm:text-[10px]">
              Sort By
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption)
                }
                className="select select-sm h-9 min-h-9 w-32 appearance-none rounded-md border border-white/10 bg-[#15171C] px-3 pr-8 text-[10px] text-white outline-none focus:border-[#C2F800] sm:w-36 sm:text-xs"
              >
                <option value="default" className="bg-[#15171C]">
                  Default
                </option>

                <option value="duration" className="bg-[#15171C]">
                  Duration
                </option>

                <option value="calories" className="bg-[#15171C]">
                  Calories
                </option>

                <option value="rating" className="bg-[#15171C]">
                  Rating
                </option>
              </select>

              <FaChevronDown
                size={8}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
              />
            </div>
          </div>
        </div>

        {workouts.length === 0 ? (
          <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-white/5 bg-[#111318] px-4 text-center sm:min-h-[280px]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C2F800]/10 sm:h-14 sm:w-14">
              {tab === "plan" ? (
                <FaRunning size={20} className="text-[#C2F800]" />
              ) : (
                <FaBookmark size={18} className="text-[#C2F800]" />
              )}
            </div>

            <h2 className="mt-4 text-base font-bold uppercase sm:mt-5 sm:text-lg">
              Nothing here yet
            </h2>

            <p className="mt-2 max-w-sm text-[10px] leading-5 text-white/40 sm:text-xs">
              {tab === "plan"
                ? "Browse the library and add a lift to get today moving"
                : "Browse the library and add a lift to get today moving"}
            </p>

            <Link
              href="/"
              className="mt-5 flex items-center gap-2 rounded-full bg-[#C2F800] px-4 py-2 text-[10px] font-bold text-black transition hover:bg-[#d4ff3b] sm:px-5 sm:text-xs"
            >
              Go to workouts
              <FaArrowRight size={9} />
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedWorkouts.map((exercise) => (
              <div
                key={exercise.id}
                className="flex flex-col gap-4 rounded-xl border border-white/5 bg-[#15171C] p-3 transition hover:border-[#C2F800]/20 md:flex-row md:items-center"
              >
                <Image
                  src={exercise.image}
                  alt={exercise.name}
                  width={112}
                  height={80}
                  className="h-40 w-full rounded-lg object-cover sm:h-44 md:h-20 md:w-28"
                />

                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-xs font-bold uppercase sm:text-sm">
                    {exercise.name}
                  </h2>

                  <p className="mt-1 truncate text-[9px] text-white/40 sm:text-[10px]">
                    {exercise.muscleGroups.join(" • ")}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-[9px] text-white/50 sm:text-[10px]">
                    <span className="flex items-center gap-1">
                      <FaClock size={8} />
                      {exercise.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                      <FaFire size={8} />
                      {exercise.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                      <FaStar size={8} className="text-[#C2F800]" />
                      {exercise.rating}
                    </span>
                  </div>
                </div>

                <div className="flex w-full flex-wrap items-center gap-2 md:w-auto md:shrink-0">
                  <Link
                    href={`/workouts/${exercise.id}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/10 px-3 py-2 text-[9px] text-white/70 transition hover:border-[#C2F800] hover:text-[#C2F800] sm:flex-none sm:text-[10px]"
                  >
                    View Details
                    <FaArrowRight size={8} />
                  </Link>

                  {tab === "plan" && (
                    <button
                      type="button"
                      onClick={() => handleMarkAsDone(exercise.id)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#C2F800] px-3 py-2 text-[9px] font-bold text-black transition hover:bg-[#d4ff3b] sm:flex-none sm:text-[10px]"
                    >
                      <FaCheck size={8} />
                      Mark as Done
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => handleRemove(exercise.id)}
                    aria-label={`Remove ${exercise.name}`}
                    title="Remove"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 text-white/30 transition hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-400"
                  >
                    <FaTimes size={10} />
                  </button>
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
