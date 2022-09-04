import "./App.css";
import Navigation from "../src/Components/Navigation/navigation.component";
import LandingPage from "./Screens/Landing/landing-page.component";
import BlogsPage from "./Screens/Blogs/blogs-page.component";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      {/*  <BlogsPage />*/}
      <LandingPage />
    </div>
  );
};

export default App;
