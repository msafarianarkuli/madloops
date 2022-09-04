import "./App.css";
import Navigation from "../src/Components/Navigation/navigation.component";
import LandingBlog from "./Components/content/Landing-Blog/landing-blog.component";
import LandingHeader from "./Components/content/Landing-Header/landing-header.component";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <LandingHeader/>
    </div>
  );
};

export default App;
