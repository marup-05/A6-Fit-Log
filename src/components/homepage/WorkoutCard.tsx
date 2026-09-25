import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";
import type { IExercise } from "../../types/exercise";

interface WorkoutCardProps {
  exercise: IExercise;
}

const WorkoutCard = ({ exercise }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${exercise.id}`}
      className="group block overflow-hidden rounded-xl border border-white/5 bg-[#15171C] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/30"
    >
      <div className="relative h-[190px] w-full overflow-hidden sm:h-[210px]">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3.5 sm:p-4">
        <div className="mb-3 flex flex-wrap gap-1.5 sm:gap-2">
          {exercise.muscleGroups.slice(0, 2).map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-2 py-1 text-[8px] font-bold uppercase text-black sm:px-2.5 sm:text-[9px]"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="text-xs font-bold uppercase text-white transition-colors duration-200 group-hover:text-[#C2F800] sm:text-sm">
          {exercise.name}
        </h3>

        <p className="mt-1 truncate text-[10px] text-white/40 sm:text-xs">
          {exercise.equipment}
        </p>

        <div className="my-3 border-t border-white/10 sm:my-4" />

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[9px] text-white/50 sm:gap-4 sm:text-[11px]">
          <div className="flex items-center gap-1.5">
            <FaClock size={8} />
            <span>{exercise.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <FaFire size={8} />
            <span>{exercise.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <FaStar size={8} />
            <span>{exercise.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;