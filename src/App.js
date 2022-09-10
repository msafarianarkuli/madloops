<<<<<<< HEAD
import "./App.css";
import Navigation from "../src/Components/Navigation/navigation.component";
import LandingBlog from "./Components/content/Landing-Blog/landing-blog.component";
import LandingHeader from "./Components/content/Landing-Header/landing-header.component";
import LandingPage from "./Screens/Landing/landing-page.component";
import BlogsPage from "./Screens/Blogs/blogs-page.component";
import LandingTeacher from "./Components/content/Landing-Teacher/teacher.component";
import LandingServices from "./Components/content/Landing-Services/landing-services.component";
import SingleBlog from "./Screens/Single-Blog/single-blog.component";

// imports
import Card from "./Components/common/Card/Card";
import LandingOffers from "./Components/content/Landing-Offers/landing-offers.component";
=======
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../src/Components/Navigation/navigation.component';
import LandingPage from './Screens/Landing/landing-page.component';
import BlogsPage from './Screens/Blogs/blogs-page.component';
import Footer from './Components/Footer/footer.component';
import ContactUs from './Screens/ContactUs/ContactUs';
import CoursesPage from './Screens/Courses/courses-page.component';
import SingleCourse from './Screens/SingleCourse/SingleCourse';
>>>>>>> af03d341ba9325b2e6cce8b1bf4efed6292c43c2

const App = () => {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navigation />
      <SingleBlog />
      {/* <LandingHeader /> */}
      {/* <LandingServices /> */}
      {/* <LandingTeacher/> */}
=======
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<LandingPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="course" element={<CoursesPage />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="single-course" element={<SingleCourse />} />
          {/* <Route path="single-blog" element={<SingleBlogPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forget-pass" element={<ForgetPassPage />} />
          <Route path="user-panel/*" element={<UserDashboard />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
>>>>>>> af03d341ba9325b2e6cce8b1bf4efed6292c43c2

      <Footer />
    </div>
  );
};

export default App;
