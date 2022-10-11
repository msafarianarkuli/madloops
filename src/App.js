import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navigation from "../src/Components/Navigation/navigation.component";
import LandingPage from "./Screens/Landing/landing-page.component";
import BlogsPage from "./Screens/Blogs/blogs-page.component";
import SingleBlog from "./Screens/Single-Blog/single-blog.component";
import CoursesPage from "./Screens/Courses/courses-page.component";
import ContactUs from "./Screens/ContactUs/ContactUs";
import SingleCourse from "./Screens/SingleCourse/SingleCourse";
import Footer from "./Components/Footer/footer.component";
import NotFoundPage from "./Screens/Not-Found/not-found.component";
import Call from "./Components/content/ContactUs/Call";
import SendMessage from "./Components/content/ContactUs/SendMessage";
import Location from "./Components/content/ContactUs/Location";
import UserPanel from "./Screens/Panel/UserPanel";
import Dashboard from "./Components/content/Panel/Dashboard";
import MyCourses from "./Components/content/Panel/MyCourses";
import CoursesList from "./Components/content/Panel/CoursesList";
import EditProfile from "./Components/content/Panel/EditProfile";
import SignUpPage from "./Screens/Sign-up/sign-up.component";
import ForgetPasswordPage from "./Screens/Forget-Password/forget-password.component";
import LoginPage from "./Screens/Login/login.component";
import CartPage from "./Components/content/Cart/cart.component";
import TeacherPage from "./Components/content/Teacher/teacher.component";

import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { pathname } = useLocation();
  const ref = useRef(document.documentElement);
  const Wrapper = ({ children }) => {
    useLayoutEffect(() => {
      ref.current.scrollTo(0, 0);
    }, [pathname]);
    return children;
  };

  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "45b6a943-f35f-4ebe-a62b-c31ea05300b1";

    (function () {
      let d = document;
      let s = d.createElement("script");

      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      setIsDarkMode(true);
    } else {
      localStorage.theme = "light";
      setIsDarkMode(false);
    }
  }, []);

  const setTheme = () => {
    localStorage.theme === "dark"
      ? (localStorage.theme = "light")
      : (localStorage.theme = "dark");
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      className={`App transition-colors duration-1000 ${localStorage.theme}`}
    >
      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigation setTheme={setTheme} />}>
            <Route index element={<LandingPage />} />
            <Route path="teacher/:id" element={<TeacherPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="blogs" element={<BlogsPage />} />
            <Route path="blogs/:id" element={<SingleBlog />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="courses/:id" element={<SingleCourse />} />

            <Route path="contactUs" element={<ContactUs />}>
              <Route index element={<Call />} />
              <Route path="message" element={<SendMessage />} />
              <Route path="location" element={<Location />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="user-panel" element={<UserPanel />}>
            <Route index element={<Dashboard />} />
            <Route path="myCourses" element={<MyCourses />} />
            <Route path="courseList" element={<CoursesList />} />
            <Route path="editProfile" element={<EditProfile />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="forget-pass" element={<ForgetPasswordPage />} />
        </Routes>

        {pathname === "/login" ||
        pathname === "/sign-up" ||
        pathname === "/forget-pass" ||
        pathname === "/user-panel" ||
        pathname === "/user-panel/myCourses" ||
        pathname === "/user-panel/courseList" ||
        pathname === "/user-panel/editProfile" ? null : (
          <Footer />
        )}
      </Wrapper>
    </div>
  );
};

export default App;
