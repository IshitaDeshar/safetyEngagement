import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarCharts = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        margin: "6rem 0rem",
        borderRadius: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
      }}
    >
      <h2
        style={{
          marginBottom: "3rem",
          textAlign: "left",
          padding: "3rem 5rem 1rem 5rem",
          fontWeight: "lighter",
          letterSpacing: "0.2rem",
          fontSize: "1.6rem",
          color: "#868383",
        }}
      >
        Monthly Reports (Bar chart)
      </h2>
      <ResponsiveContainer width="95%" height={300}>
        <BarChart data={data} margin={{ top: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#49A472" barSize={55} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
