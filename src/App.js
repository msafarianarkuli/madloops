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

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <SingleBlog />
      {/* <LandingHeader /> */}
      {/* <LandingServices /> */}
      {/* <LandingTeacher/> */}
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

      <Footer />
    </div>
  );
};

export default App;
