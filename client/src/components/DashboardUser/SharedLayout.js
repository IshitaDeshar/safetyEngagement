import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Wrapper from "../../wrappers/SharedLayout";
import { DashNavbar, BigSidebar, SmallSidebar } from "../../DashComponent";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <DashNavbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
