import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "../src/Components/Navigation/navigation.component";
import LandingPage from "./Screens/Landing/landing-page.component";
import BlogsPage from "./Screens/Blogs/blogs-page.component";
import Footer from "./Components/Footer/footer.component";
import ContactUs from "./Screens/ContactUs/ContactUs";
import CoursesPage from "./Screens/Courses/courses-page.component";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<LandingPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="course" element={<CoursesPage />} />
          <Route path="contactUs" element={<ContactUs />} />
          {/* <Route path="single-blog" element={<SingleBlogPage />} /> 
           <Route path="single-course" element={<SingleCoursePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forget-pass" element={<ForgetPassPage />} />
          <Route path="user-panel/*" element={<UserDashboard />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
