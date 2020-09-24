import React from "react";
// route
import { BrowserRouter as Router } from "react-router-dom";
// components
import Header from "./components/portfolio/header/Header";
import Footer from "./components/portfolio/footer/Footer";
import Projects from "./components/portfolio/projectspage/Projects";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Projects />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
