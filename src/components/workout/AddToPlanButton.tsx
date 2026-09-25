"use client";

import { FaDumbbell } from "react-icons/fa";
import { toast } from "react-toastify";

import type { IExercise } from "../../types/exercise";
import { useFitLog } from "../../context/FitLogContext";

interface AddToPlanButtonProps {
  exercise: IExercise;
}

const AddToPlanButton = ({ exercise }: AddToPlanButtonProps) => {
  const { plan, addToPlan } = useFitLog();

  const handleAddToPlan = () => {
    const alreadyExists = plan.some((item) => item.id === exercise.id);

    if (alreadyExists) {  
      toast.info("Already in today's plan");
      return;
    }

    addToPlan(exercise);

    toast.success("Added to today's plan");
  };

  return (
    <button
      type="button"
      onClick={handleAddToPlan}
      className="flex items-center gap-2 rounded-md bg-[#C2F800] px-4 py-3 text-xs font-bold text-black transition hover:bg-[#d4ff3b]"
    >
      <FaDumbbell size={11} />
      Add to today's plan  
    </button>
  );
};

export default AddToPlanButton;
