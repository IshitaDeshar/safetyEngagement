import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
// import { isAuth } from "./helpers";
import { Navigate, Outlet } from "react-router-dom";

const isAuth = () => {
  //   const user = localStorage.getItem("user");
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.role === "admin") {
    return true;
  } else {
    return false;
  }
};

const AdminRoute = (props: any) => {
  const auth = isAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default AdminRoute;
