"use client";

import { toast } from "react-toastify";

import type { IExercise } from "../../types/exercise";
import { useFitLog } from "../../context/FitLogContext";

interface SaveButtonProps {
  exercise: IExercise;
}

const SaveButton = ({ exercise }: SaveButtonProps) => {
  const { saved, saveWorkout } = useFitLog();

  const handleSave = () => {
    const alreadySaved = saved.some((item) => item.id === exercise.id);

    if (alreadySaved) {
      toast.info("Already saved");
      return;
    }

    saveWorkout(exercise);

    toast.success("Saved for later");
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      className="rounded-md border border-white/15 px-4 py-3 text-xs font-medium text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
    >
      Save for later
    </button>
  );
};

export default SaveButton;
