import { useEffect } from "react";
import { useAppContext } from "../../Context/appContext";
import {
  DashboardContainer,
  Loading,
  ChartsContainer,
} from "../../DashComponent";
import React from "react";

const Dashboard = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();
  useEffect(() => {
    showStats();
  }, []);
  // if (isLoading) {
  //   return <Loading center />;
  // }
  return (
    <>
      <DashboardContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Dashboard;
