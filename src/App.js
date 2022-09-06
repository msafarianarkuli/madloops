import "./App.css";
import Navigation from "../src/Components/Navigation/navigation.component";
import LandingBlog from "./Components/content/Landing-Blog/landing-blog.component";
import LandingHeader from "./Components/content/Landing-Header/landing-header.component";
import LandingPage from "./Screens/Landing/landing-page.component";
import BlogsPage from "./Screens/Blogs/blogs-page.component";
import LandingTeacher from "./Components/content/Landing-Teacher/teacher.component";
import LandingServices from "./Components/content/Landing-Services/landing-services.component";

// imports
import Card from "./Components/common/Card/Card";
import LandingOffers from "./Components/content/Landing-Offers/landing-offers.component";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <LandingHeader />
<<<<<<< HEAD
      <LandingServices />
      {/* <LandingTeacher/> */}

      {/* <BlogsPage /> */}
      {/* <LandingOffers /> */}

      {/* <BlogsPage /> */}
=======
      {/* <LandingServices /> */}
      <LandingTeacher />
>>>>>>> c0e53720a9b0f2cc02c4b680725965dc70c8dfbd
    </div>
  );
};

export default App;
