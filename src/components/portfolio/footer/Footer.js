import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="flex-rows">
          <div className="footer-pages">
            <li>
              <Link className="header-links" to="/">
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
          </div>
          <div className="footer-items">
            <h3>Leroi.Dev</h3>
            <p>copyright &copy; 2021</p>
          </div>

          <div className="footer-logos">
            <Link to="/">
              <i className="fab fa-github fa-2x"> </i> GitHub
            </Link>
            <Link to="/">
              <i className="fab fa-instagram fa-2x"> </i> Instagram
            </Link>
            <Link to="/">
              <i className="fab fa-facebook fa-2x"> </i> FaceBook
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
