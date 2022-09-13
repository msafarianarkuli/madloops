import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "../src/Components/Navigation/navigation.component";
import LandingBlog from "./Components/content/Landing-Blog/landing-blog.component";
import LandingHeader from "./Components/content/Landing-Header/landing-header.component";
import LandingPage from "./Screens/Landing/landing-page.component";
import BlogsPage from "./Screens/Blogs/blogs-page.component";
import LandingTeacher from "./Components/content/Landing-Teacher/teacher.component";
import LandingServices from "./Components/content/Landing-Services/landing-services.component";
import SingleBlog from "./Screens/Single-Blog/single-blog.component";
import CoursesPage from "./Screens/Courses/courses-page.component";
import ContactUs from "./Screens/ContactUs/ContactUs";
import SingleCourse from "./Screens/SingleCourse/SingleCourse";
import Footer from "./Components/Footer/footer.component";

// imports
import Card from "./Components/common/Card/Card";
import LandingOffers from "./Components/content/Landing-Offers/landing-offers.component";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<LandingPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="course" element={<CoursesPage />} />
          <Route path="single-course" element={<SingleCourse />} />
<<<<<<< HEAD
          <Route path="contactUs" element={<ContactUs />} />
          {/* <Route path="single-blog" element={} /> */}
=======
          <Route path="single-blog" element={<SingleBlog />} />
          {/* <Route path="contactUs" element={<ContactUs />} /> */}
>>>>>>> 63172d06f056aee515b41ddf765d0498c0ca01c7
          {/* <Route path="single-course" element={<SingleCourse />} />
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
