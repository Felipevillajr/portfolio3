import React from "react";
import "./home.scss";
import Video from "../../assets/videos/happytobehere.mp4";
// import { Link } from "react-router-dom";
// import arrow from "../../assets/images/arrow.png";

export default function home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="box">
          <video
            loop={true}
            autoPlay="autoPlay"
            muted
            className="background__video"
          >
            <source src={Video} type="video/mp4" />
          </video>
          <div className="hero-banner">
            <h1>Design with you in mind</h1>
            <br />
            <h3>Web Presence Creation</h3>
            <p>&</p>
            <h3>Reliable</h3>
            <h3> Web Development Solutions</h3>
          </div>
        </div>
        <div className="section1">
          <div
            className="hero-container"
            alt="person infront of computer"
          ></div>
          <div className="hero-shape">
            <h2>Engaging digital innovation to inspire and create</h2>
            <br />
            <p>
              Bring cyberspace to your business and enpower yourself to focus on
              growth. My goal is to provide full individualized service and
              support for all web based technical needs. So you can generate
              more revenue for your business.{" "}
            </p>
          </div>
          {/* <Link to="/about">
          <div className="learnmore">
            <div>
              <h2>Learn more</h2>
            </div>
            <img className="hero-arrow" src={arrow} alt="img arrow" />
          </div>
        </Link> */}
          <div className="hero-container2"></div>
        </div>

        <div className="section2">
          <div className="hero-container3">
            <p>Take all the hassle out of </p>
          </div>
          <div className="hero-shape3">
            <h2>Web Design and Development</h2>
          </div>
          <div className="hero-shape4">
            <h2>Frontend</h2>
            <br />
            <p>
              My experience includes vanilla javascript, HTML, CSS, SASS, Babel,
              React. Using tools such as Bootstrap and Material UI; I can create
              High fidelity designs covering all levels of responsiveness.
            </p>
          </div>
          <div className="hero-container4"></div>
          <div className="hero-shape5">
            <h2>Frameworks</h2>
            <br />
            <p>
              Working with the most reliable systems currenly in the market;
              NodeJS and SQL databases. These are optimized for multiple
              situations for uninterrupted deployment with real-time
              applications available on demand using MVC-like architecture. CRUD
              based APIs for a variety of situations.
            </p>
          </div>
          <div className="hero-shape6">
            <h2>API Application</h2>
            <br />
            <p>
              If it's building graphs for your customer to review or advertising
              real-time analytics with your team accross the globe. API creation
              and implementation are possible.
              <ul className="list">
                <li>Analytics</li>
                <li>Accounting</li>
                <li>Booking</li>
                <li>Affiliate Marketing</li>
                <li>Weather</li>
                <li>Maps</li>
                <li>Payment Processing</li>
                <li>Lead Tracking</li>
                <li>Social Media</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="section3">
          <h1>Expand </h1>
          <h2> Your Business</h2>
          <br />
          <br />
          <p>
            We can Build reliable font-end and Back-end technology for making
            custom web applications for revenue generation or improve the
            efficiency of web applications. Using the latest in innovative and
            functional technology.
          </p>
        </div>
      </section>
    </div>
  );
}
