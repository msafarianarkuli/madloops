import React from "react";

import { Routes, Route } from "react-router-dom";

import PublicRoute from "../PublicRoute/PublicRoute";
import UserPanel from "../../Screens/Panel/UserPanel";
import Dashboard from "../../Components/content/Panel/Dashboard";
import MyCourses from "../../Components/content/Panel/MyCourses";
import CoursesList from "../../Components/content/Panel/CoursesList";
import EditProfile from "../../Components/content/Panel/EditProfile";
import NotFoundPage from "../../Screens/Not-Found/not-found.component";

const Authenticated = (props) => {
  return (
    <Routes>
      <Route path="user-panel" element={<UserPanel />}>
        <Route index element={<Dashboard />} />
        <Route path="myCourses" element={<MyCourses />} />
        <Route path="courseList" element={<CoursesList />} />
        <Route path="editProfile" element={<EditProfile />} />
      </Route>
      <Route path="not-found" element={<NotFoundPage />} />
      <Route path="*" element={<PublicRoute setTheme={props.setTheme} />} />
    </Routes>
  );
};

export default Authenticated;