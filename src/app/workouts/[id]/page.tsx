import { notFound } from "next/navigation";
import WorkoutDetails from "../../../components/workout/WorkoutDetails";
import type { IExercise } from "../../../types/exercise";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

interface WorkoutDetailsPageProps {
  params: Promise<{ id: string }>;
}

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const exercises: IExercise[] = await response.json();

  const exercise = exercises.find((item) => item.id === Number(id));

  if (!exercise) {
    notFound();
  }

  return <WorkoutDetails exercise={exercise} />;
};

export default WorkoutDetailsPage;
