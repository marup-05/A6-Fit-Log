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
      {/* Image */}
      <div className="relative h-[210px] w-full overflow-hidden">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">

        {/* Muscle Groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {exercise.muscleGroups.slice(0, 2).map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[9px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise Name */}
        <h3 className="text-sm font-bold uppercase text-white transition-colors duration-200 group-hover:text-[#C2F800]">
          {exercise.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-xs text-white/40">
          {exercise.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-white/10" />

        {/* Exercise Info */}
        <div className="flex items-center gap-4 text-[11px] text-white/50">

          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <FaClock size={9} />
            <span>{exercise.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <FaFire size={9} />
            <span>{exercise.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <FaStar size={9} />
            <span>{exercise.rating}</span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;