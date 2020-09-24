import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "../../../App.css";
import ShowCase from "../showcase/ShowCase";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Router>
          <ul>
            <li>
              <Link className="header-links" to="/projects">
                <i className="fab fa-react"></i> Projects
              </Link>
            </li>
            <li>
              <Link className="header-links" to="/">
                <i className="fas fa-child"></i> About Me
              </Link>
            </li>
            <li>
              <Link className="header-links" to="/">
                <i className="fas fa-address-card"></i> Contact
              </Link>
            </li>
          </ul>
        </Router>
        <ShowCase />
      </div>
    </div>
  );
};

export default Header;
