import "./App.css";
import Navigation from "../src/Components/Navigation/navigation.component";
import LandingBlog from "./Components/content/Landing-Blog/landing-blog.component";
import LandingHeader from "./Components/content/Landing-Header/landing-header.component";
=======
import LandingPage from "./Screens/Landing/landing-page.component";
import BlogsPage from "./Screens/Blogs/blogs-page.component";
>>>>>>> 5ddc7e819bc5ef0bc6d6396df3d084fe65cd78bc

const App = () => {
  return (
    <div className="App">
      <Navigation />
<<<<<<< HEAD
      <LandingHeader/>
=======
      {/*  <BlogsPage />*/}
      <LandingPage />
>>>>>>> 5ddc7e819bc5ef0bc6d6396df3d084fe65cd78bc
    </div>
  );
};

export default App;
