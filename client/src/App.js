import React from "react";
import Navbar from "./components/Navbar";
import { Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Activate from "./auth/Activate";
import Forgot from "./auth/Forgot";
import Reset from "./auth/Reset";
// import Private from "./components/Private";
import "./styles/index.css";
import PrivateRoute from "./auth/PrivateRoute";
import UserDashboard from "./components/UserDashboard";
import Admin from "./components/DashboardAdmin/Admin";
import AdminRoute from "./auth/AdminRoute";
import Error from "./components/Error";
import { AppProvider } from "./Context/appContext";

// import ProtectedRoute from "./components/ProtectedRoute";
// import styled from "styled-components";

import {
  AddReport,
  AllReport,
  Dashboard,
  MyEngagement,
  Settings,
  SharedLayout,
  IndividualReport,
  UpdateReport,
  ProfileUpdate,
  ViewReportEmail,
} from "./components/DashboardUser";
import SharedLayoutAdmin from "./components/DashboardAdmin/SharedLayoutAdmin";
import CreateUser from "./components/DashboardAdmin/CreateUser";
import AdminRegister from "./components/DashboardAdmin/AdminRegister";
import AdminUpdate from "./components/DashboardAdmin/AdminUpdate";
import AdminProfile from "./components/DashboardAdmin/AdminProfile";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <AppProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/auth/password/forgot" element={<Forgot />} />
          <Route exact path="/auth/password/reset/:token" element={<Reset />} />
          <Route exact path="/UserDashboard" element={<UserDashboard />} />
          {/* <Route exact path="/admin" element={<Admin />} /> */}

          {/* <Route
          path="/private"
          element={
            <PrivateRoute>
              {" "}
              <Private />{" "}
            </PrivateRoute>
          }
        /> */}
          <Route exact path="/" element={<PrivateRoute />}>
            {/* <Route exact path="/private" element={<Private />} /> */}
            <Route
              exact
              path="/private"
              element={
                // <PrivateRoute>
                <SharedLayout />
                // </PrivateRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="addReport" element={<AddReport />} />
              <Route path="allReport" element={<AllReport />} />
              <Route path="myEngagement" element={<MyEngagement />} />
              <Route path="setting" element={<Settings />} />
              <Route
                path="/private/individualReport/:id"
                element={<IndividualReport />}
              />
              <Route path="/private/allReport/:id" element={<UpdateReport />} />
              <Route
                path="/private/profileUpdate"
                element={<ProfileUpdate />}
              />
            </Route>
          </Route>
          <Route
            path="/private/viewReportEmail/:id"
            element={<ViewReportEmail />}
          />
          <Route exact path="/" element={<AdminRoute />}>
            <Route exact path="/admin" element={<SharedLayoutAdmin />}>
              <Route index element={<Admin />} />
              <Route path="createUser" element={<CreateUser />} />
              <Route path="/admin/RegisterAdmin" element={<AdminRegister />} />
              <Route path="/admin/AdminUpdate/:id" element={<AdminUpdate />} />
              <Route path="/admin/AdminProfile" element={<AdminProfile />} />
            </Route>
          </Route>

          <Route exact path="/auth/activate/:token" element={<Activate />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </AppProvider>
    </>
  );
};

export default App;
