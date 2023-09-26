import React, { useState } from "react";
import BarCharts from "./BarCharts";
import AreaCharts from "./AreaCharts";
import { useAppContext } from "../Context/appContext";
import Wrapper from "../wrappers/ChartsContainer";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: date } = useAppContext();
  return (
    <Wrapper>
      <h1>Monthly Reports</h1>
      <button type="buttton" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarCharts data={date} /> : <AreaCharts data={date} />}
    </Wrapper>
  );
};

export default ChartsContainer;
