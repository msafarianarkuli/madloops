import "./App.css";
import Navigation from "../src/Components/Navigation/navigation.component";
import LandingBlog from "./Components/content/Landing-Blog/landing-blog.component";
import LandingHeader from "./Components/content/Landing-Header/landing-header.component";
import LandingPage from "./Screens/Landing/landing-page.component";
import BlogsPage from "./Screens/Blogs/blogs-page.component";
import LandingTeacher from "./Components/content/Landing-Teacher/teacher.component";

const App = () => {
  return (
    <div className="App">
      <Navigation />
<<<<<<< HEAD
      {/* <LandingHeader/> */}
      <LandingTeacher/>

      <BlogsPage />
>>>>>>> fa2759387961d6aba3d01a739ec310e81788d6e6
    </div>
  );
};

export default App;
