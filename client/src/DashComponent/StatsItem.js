import React from "react";
import Wrapper from "../wrappers/StatsItem";

const StatsItem = ({ count, title, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="countStats">{count}</span>
        <span className="iconStats">{icon}</span>
      </header>
      <h1 className="titleStats">{title}</h1>
    </Wrapper>
  );
};

export default StatsItem;
