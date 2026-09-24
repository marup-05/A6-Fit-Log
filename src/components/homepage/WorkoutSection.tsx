import WorkoutCard from "./WorkoutCard";
import type { IExercise } from "../../types/exercise";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

const getExercises = async (): Promise<IExercise[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const data = await response.json();

  return data;
};

const WorkoutSection = async () => {
  const exercises = await getExercises();

  return (
    <section className="container mx-auto px-4 py-12">

     
      <div className="mb-6">
        <h2 className="text-2xl font-black uppercase text-white md:text-3xl">
          The Library
        </h2>

        <p className="mt-1 text-sm text-white/40">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

     
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <WorkoutCard
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </div>

    </section>
  );
};

export default WorkoutSection;