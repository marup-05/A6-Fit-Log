import Image from "next/image";
import { FaClock, FaFire, FaStar, FaDumbbell } from "react-icons/fa";
import type { IExercise } from "../../types/exercise";
import AddToPlanButton from "./AddToPlanButton";
import SaveButton from "./SaveButton";

interface WorkoutDetailsProps {
  exercise: IExercise;
}

const WorkoutDetails = ({ exercise }: WorkoutDetailsProps) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative h-[400px] overflow-hidden rounded-xl lg:h-[520px]">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-black uppercase text-white md:text-4xl">
            {exercise.name}
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
            {exercise.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl bg-[#15171C]">
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <span className="text-[10px] uppercase text-white/40">
                Equipment
              </span>

              <span className="text-xs text-white">{exercise.equipment}</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <span className="text-[10px] uppercase text-white/40">
                Difficulty
              </span>

              <span className="text-xs text-white">{exercise.difficulty}</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <span className="text-[10px] uppercase text-white/40">Sets</span>

              <span className="text-xs text-white">{exercise.sets}</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <span className="text-[10px] uppercase text-white/40">Reps</span>

              <span className="text-xs text-white">{exercise.reps}</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <span className="flex items-center gap-2 text-[10px] uppercase text-white/40">
                <FaClock />
                Duration
              </span>

              <span className="text-xs text-white">
                {exercise.duration} min
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <span className="flex items-center gap-2 text-[10px] uppercase text-white/40">
                <FaFire />
                Calories
              </span>

              <span className="text-xs text-white">
                {exercise.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between px-4 py-4">
              <span className="flex items-center gap-2 text-[10px] uppercase text-white/40">
                <FaStar />
                Rating
              </span>

              <span className="text-xs text-white">{exercise.rating}</span>
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-sm font-bold uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {exercise.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-xs leading-5 text-white/50"
                >
                  <span className="font-bold text-[#C2F800]">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <AddToPlanButton exercise={exercise} />
            <SaveButton exercise={exercise} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;
