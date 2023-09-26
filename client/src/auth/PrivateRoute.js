import React, { component } from "react";
import { Route, Routes } from "react-router-dom";
// import { isAuth } from "./helpers";
import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoute = ({ element: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuth() ? (
//         <Component {...props} />
//       ) : (
//         <Navigate
//           to={{
//             pathname: "/login",
//             state: { from: props.location },
//           }}
//         />
//       )
//     }
//   />
// );
const isAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const PrivateRoute = (props: any) => {
  const auth = isAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
