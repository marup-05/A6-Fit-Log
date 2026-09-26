import { Suspense } from "react";
import MyPlanContent from "../../components/my-plan/MyPlanContent";

export const dynamic = "force-dynamic";

interface MyPlanPageProps {
  searchParams: Promise<{
    tab?: string;
  }>;
}

const MyPlanPage = async ({ searchParams }: MyPlanPageProps) => {
  const params = await searchParams;

  const tab = params.tab === "saved" ? "saved" : "plan";

  return (
    // 2. Suspense boundary দিয়ে কম্পোনেন্টটিকে Wrap করা হলো
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-[#101114] text-white">Loading...</div>}>
      <MyPlanContent tab={tab} />
    </Suspense>
  );
};

export default MyPlanPage;