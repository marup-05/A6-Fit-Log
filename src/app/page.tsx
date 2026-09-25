import { Suspense } from "react";

import Banner from "../components/homepage/Banner";
import WorkoutSection from "../components/homepage/WorkoutSection";
import LoadingSkeleton from "../components/shared/LoadingSkeleton";

const HomePage = () => {
  return (
    <>
      <Banner />

      <Suspense fallback={<LoadingSkeleton />}>
        <WorkoutSection />
      </Suspense>
    </>
  );
};

export default HomePage;