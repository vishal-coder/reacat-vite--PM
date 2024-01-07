import { Navigate } from "react-router-dom";

import React from "react";

import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const { userToken } = useSelector((state) => state.auth);

  if (!userToken) {
    return <Navigate to="/login" />;
  }

  return children;
}