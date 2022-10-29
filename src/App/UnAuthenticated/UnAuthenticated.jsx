import React from "react";
import { Routes, Route } from "react-router-dom";

import PublicRoute from "../PublicRoute/PublicRoute";
import LoginPage from "../../Screens/Login/login.component";
import SignUpPage from "../../Screens/Sign-up/sign-up.component";
import ForgetPasswordPage from "../../Screens/Forget-Password/forget-password.component";
import NotFoundPage from "../../Screens/Not-Found/not-found.component";

const UnAuthenticated = (props) => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="forget-pass" element={<ForgetPasswordPage />} />

      <Route path="not-found" element={<NotFoundPage />} />

      <Route path="*" element={<PublicRoute setTheme={props.setTheme} />} />
    </Routes>
  );
};

export default UnAuthenticated;
