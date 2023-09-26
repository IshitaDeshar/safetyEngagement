import React from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  return <div>there is no user</div>;
  return children;
};

export default ProtectedRoute;
