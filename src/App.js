import "./App.css";
import Navigation from "../src/Components/Navigation/navigation.component";
import LandingPage from "./Screens/Landing/landing-page";
import Footer from "./Components/Footer/footer.component";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
