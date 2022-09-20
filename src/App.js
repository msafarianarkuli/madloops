import { Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<LandingPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="course" element={<CoursesPage />} />
          <Route path="single-course" element={<SingleCourse />} />
          <Route path="contactUs" element={<ContactUs />}>
            <Route index element={<Call />} />
            <Route path="message" element={<SendMessage />} />
            <Route path="location" element={<Location />} />
          </Route>
          <Route path="single-blog" element={<SingleBlog />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="user-panel" element={<UserPanel />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="myCourses" element={<MyCourses />} />
          <Route path="courseList" element={<CoursesList />} />
          <Route path="editProfile" element={<EditProfile />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="forget-pass" element={<ForgetPasswordPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
