"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { IExercise } from "../types/exercise";

interface FitLogContextType {
  plan: IExercise[];
  saved: IExercise[];

  addToPlan: (exercise: IExercise) => void;
  removeFromPlan: (id: number) => void;

  saveWorkout: (exercise: IExercise) => void;
  removeFromSaved: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

const FitLogProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [plan, setPlan] = useState<IExercise[]>([]);
  const [saved, setSaved] = useState<IExercise[]>([]);

  const addToPlan = (exercise: IExercise) => {
    setPlan((previousPlan) => {
      const alreadyExists = previousPlan.some(
        (item) => item.id === exercise.id
      );

      if (alreadyExists) {
        return previousPlan;
      }

      return [...previousPlan, exercise];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlan((previousPlan) =>
      previousPlan.filter((item) => item.id !== id)
    );
  };

  const saveWorkout = (exercise: IExercise) => {
    setSaved((previousSaved) => {
      const alreadyExists = previousSaved.some(
        (item) => item.id === exercise.id
      );

      if (alreadyExists) {
        return previousSaved;
      }

      return [...previousSaved, exercise];
    });
  };

  const removeFromSaved = (id: number) => {
    setSaved((previousSaved) =>
      previousSaved.filter((item) => item.id !== id)
    );
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeFromSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
};

export { FitLogProvider };