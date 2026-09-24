import MyPlanContent from "../../components/my-plan/MyPlanContent";

interface MyPlanPageProps {
  searchParams: Promise<{
    tab?: string;
  }>;
}

const MyPlanPage = async ({ searchParams }: MyPlanPageProps) => {
  const params = await searchParams;

  const tab = params.tab === "saved" ? "saved" : "plan";

  return <MyPlanContent tab={tab} />;
};

export default MyPlanPage;
