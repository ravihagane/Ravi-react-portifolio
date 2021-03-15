import "./App.css";
import Home from "./pages/Home/index";
import Navbar from "./pages/utils/Navbar";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Project from "./pages/Project/Project";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
