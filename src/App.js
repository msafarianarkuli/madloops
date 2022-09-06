import "./App.css";
import Navigation from "../src/Components/Navigation/navigation.component";
import LandingBlog from "./Components/content/Landing-Blog/landing-blog.component";
import LandingHeader from "./Components/content/Landing-Header/landing-header.component";
import LandingPage from "./Screens/Landing/landing-page.component";
import BlogsPage from "./Screens/Blogs/blogs-page.component";
import LandingTeacher from "./Components/content/Landing-Teacher/teacher.component";
import LandingCource from "./Components/content/Landing-Course/landing-cource.component";

// imports
<<<<<<< HEAD
import LandingOffers from './Components/content/Landing-Offers/landing-offers.component';
=======
import Card from "./Components/common/Card/Card";
import LandingOffers from "./Components/content/Landing-Offers/landing-offers.component";
>>>>>>> 12f348724f56540c29cb997db591d30823c08e9c

const App = () => {
  return (
    <div className="App">
      <Navigation />
<<<<<<< HEAD
      <LandingOffers />
=======

      <BlogsPage />
>>>>>>> 12f348724f56540c29cb997db591d30823c08e9c
    </div>
  );
};

export default App;
