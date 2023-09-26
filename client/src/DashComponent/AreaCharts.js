import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaCharts = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        margin: "8rem 0rem",
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
        Monthly Reports (Area Chart)
      </h2>
      <ResponsiveContainer width="95%" height={300}>
        <AreaChart data={data} margin={{ top: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#49A472"
            fill="#C0E1CF"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaCharts;
