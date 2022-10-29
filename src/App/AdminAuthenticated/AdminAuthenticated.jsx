import React from "react";
import { Routes, Route } from "react-router-dom";

import PublicRoute from "../PublicRoute/PublicRoute";

const AdminAuthenticated = () => {
  return (
    <Routes>
      <PublicRoute />
    </Routes>
  );
};

export default AdminAuthenticated;
