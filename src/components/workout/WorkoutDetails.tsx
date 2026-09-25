import Image from "next/image";
import { FaClock, FaFire, FaStar } from "react-icons/fa";
import type { IExercise } from "../../types/exercise";
import AddToPlanButton from "./AddToPlanButton";
import SaveButton from "./SaveButton";

interface WorkoutDetailsProps {
  exercise: IExercise;
}

const WorkoutDetails = ({ exercise }: WorkoutDetailsProps) => {
  return (
    <section className="container mx-auto px-3 py-8 sm:px-4 sm:py-10 md:py-12">
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
        <div className="relative h-[280px] overflow-hidden rounded-xl sm:h-[360px] md:h-[420px] lg:h-[520px]">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl">
            {exercise.name}
          </h1>

          <p className="mt-3 max-w-2xl text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
            {exercise.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[9px] font-bold uppercase text-black sm:px-3 sm:text-[10px]"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-xl bg-[#15171C] sm:mt-6">
            <div className="flex items-center justify-between gap-4 border-b border-white/5 px-3 py-3 sm:px-4 sm:py-4">
              <span className="text-[9px] uppercase text-white/40 sm:text-[10px]">
                Equipment
              </span>

              <span className="text-right text-[10px] text-white sm:text-xs">
                {exercise.equipment}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 border-b border-white/5 px-3 py-3 sm:px-4 sm:py-4">
              <span className="text-[9px] uppercase text-white/40 sm:text-[10px]">
                Difficulty
              </span>

              <span className="text-xs text-white">{exercise.difficulty}</span>
            </div>

            <div className="flex items-center justify-between gap-4 border-b border-white/5 px-3 py-3 sm:px-4 sm:py-4">
              <span className="text-[9px] uppercase text-white/40 sm:text-[10px]">
                Sets
              </span>

              <span className="text-xs text-white">{exercise.sets}</span>
            </div>

            <div className="flex items-center justify-between gap-4 border-b border-white/5 px-3 py-3 sm:px-4 sm:py-4">
              <span className="text-[9px] uppercase text-white/40 sm:text-[10px]">
                Reps
              </span>

              <span className="text-xs text-white">{exercise.reps}</span>
            </div>

            <div className="flex items-center justify-between gap-4 border-b border-white/5 px-3 py-3 sm:px-4 sm:py-4">
              <span className="flex items-center gap-2 text-[9px] uppercase text-white/40 sm:text-[10px]">
                <FaClock />
                Duration
              </span>

              <span className="text-xs text-white">
                {exercise.duration} min
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 border-b border-white/5 px-3 py-3 sm:px-4 sm:py-4">
              <span className="flex items-center gap-2 text-[9px] uppercase text-white/40 sm:text-[10px]">
                <FaFire />
                Calories
              </span>

              <span className="text-xs text-white">
                {exercise.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 px-3 py-3 sm:px-4 sm:py-4">
              <span className="flex items-center gap-2 text-[9px] uppercase text-white/40 sm:text-[10px]">
                <FaStar />
                Rating
              </span>

              <span className="text-xs text-white">{exercise.rating}</span>
            </div>
          </div>

          <div className="mt-6 sm:mt-7">
            <h2 className="text-sm font-bold uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3 sm:mt-4">
              {exercise.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-2.5 text-[11px] leading-5 text-white/50 sm:gap-3 sm:text-xs"
                >
                  <span className="shrink-0 font-bold text-[#C2F800]">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
            <AddToPlanButton exercise={exercise} />
            <SaveButton exercise={exercise} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;
