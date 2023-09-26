import React from "react";
import StatsItem from "./StatsItem";
import { useAppContext } from "../Context/appContext";
import Wrapper from "../wrappers/DashboardContainer";

const DashboardContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: "UNSAFE CONDITION",
      count: stats.UnsafeCondition || 0,
      icon: <i className="fas fa-exclamation-triangle "></i>,
      color: "#CD5C5C",
      bcg: "#F6C8CC",
    },
    {
      title: "UNSAFE ACTS",
      count: stats.UnsafeAct || 0,
      icon: <i class="fa-solid fa-person-falling-burst "></i>,
      color: "#FBAA60",
      bcg: "#F9EAC2",
    },
    {
      title: "ENVIRONMENTAL",
      count: stats.Environmental || 0,
      icon: <i class="fa-solid fa-tree"></i>,
      color: " #478C5C",

      bcg: "#B6D2A5",
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default DashboardContainer;
