import React from "react";
import amazonLogo from "../../../img/amazon-logo.png";
import covidLogo from "../../../img/covid-tracker.jpg";
import airbnb from "../../../img/airbnb.jpg";
import netflix from "../../../img/netflix.png";
import tiktok from "../../../img/tiktok.jpg";
import breakingbad from "../../../img/breakingbad.jpg";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Some Projects built this past month</h2>
        <div className="bottom-line"></div>
        <div className="items">
          <div className="item">
            <div className="item-image">
              <img src={amazonLogo} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text wrap">
                <p className="item-text-category">React</p>
                <h2 className="item-text-title">Amazone Clone</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={covidLogo} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text wrap">
                <p className="item-text-category">React</p>
                <h2 className="item-text-title">COVID-19 TRACKER</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={airbnb} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text wrap">
                <p className="item-text-category">React</p>
                <h2 className="item-text-title">Airbnb Clone</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={netflix} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text wrap">
                <p className="item-text-category">React</p>
                <h2 className="item-text-title">NETFLIX CLONE</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={tiktok} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text wrap">
                <p className="item-text-category">React</p>
                <h2 className="item-text-title">TIKTOK CLONE</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={breakingbad} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text wrap">
                <p className="item-text-category">React - simple free api</p>
                <h2 className="item-text-title">BREAKING BAD APP</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="short">
          <h2>"GREAT DEVELOPERS NEVER STOP LEARNING"</h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
