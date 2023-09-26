import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Wrapper from "../../AdminWrappers/AdminSharedLayout";
import AdminBigSidebar from "../../AdminDashComponent/AdminBigSidebar";
import AdminDashNavbar from "../../AdminDashComponent/AdminDashNavbar";
import AdminSmallSidebar from "../../AdminDashComponent/AdminSmallSidebar";
const SharedLayoutAdmin = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <AdminSmallSidebar />
        <AdminBigSidebar />
        <div>
          <AdminDashNavbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayoutAdmin;
