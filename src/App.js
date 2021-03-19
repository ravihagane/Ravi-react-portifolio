import "./App.css";
import Home from "./pages/Home/index";
import Navbar from "./pages/utils/Navbar";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Project from "./pages/Project/Project";
import Hero from "./pages/Hero/hero";
import Footer from "./pages/utils/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/">
          <Hero />
          <Home />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
