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
      return workoutList.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned,
      );
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
    <main className="min-h-screen bg-[#101114] px-4 py-10 text-white">
      <div className="container mx-auto">
        <div className="mb-7">
          <h1 className="text-3xl font-black uppercase">My Plan</h1>
          <p className="mt-2 text-xs text-white/40">
            Cap of five lifts for <i>today.</i> Finish <i>them,</i> then load{" "}
            <i>more.</i>
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

        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">
              Sort By
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption)
                }
                className="select select-sm h-9 min-h-9 w-36 appearance-none rounded-md border border-white/10 bg-[#15171C] px-3 pr-8 text-xs text-white outline-none focus:border-[#C2F800]"
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
                size={9}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
              />
            </div>
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
                ? "Browse the library and add a lift to get today moving"
                : "Browse the library and add a lift to get today moving"}
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
                      onClick={() => handleMarkAsDone(exercise.id)}
                      className="flex items-center gap-2 rounded-md bg-[#C2F800] px-3 py-2 text-[10px] font-bold text-black transition hover:bg-[#d4ff3b]"
                    >
                      <FaCheck size={9} />
                      Mark as Done
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => handleRemove(exercise.id)}
                    aria-label={`Remove ${exercise.name}`}
                    title="Remove"
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-white/30 transition hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-400"
                  >
                    <FaTimes size={11} />
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