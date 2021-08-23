import React from "react";
import "./home.scss";
import Video from "../../assets/videos/happytobehere.mp4";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.png";

export default function home() {
  return (
    <div className="home">
      <section className="hero-section">
        <video loop={true} autoPlay="autoPlay" muted id="background__video">
          <source src={Video} type="video/mp4" />
        </video>
        <div className="hero-banner">
          <h1>Design with you in mind</h1>
          <h3>Online Presence Creation</h3>
          <p>&</p>
          <h3>Reliable Solutions</h3>
        </div>
        <div className="hero-container" alt="person infront of computer"></div>
        <div className="hero-shape">
          <h2>Engaging digital innovation to inspire and create</h2>
          <br />
          <p>
            Bring cyberspace to your business and enpower yourself to focus on
            growth. My goal is to provide full individualized service and
            support for and and all web based technical needs. So you can
            generate more revenue for your business.{" "}
          </p>
        </div>
        <Link to="/learn-more">
          <div className="learnmore">
            <div>
              <h2>Learn more</h2>
            </div>
            <img className="hero-arrow" src={arrow} alt="img arrow" />
          </div>
        </Link>
        <div className="hero-container2"></div>
        <div className="hero-shape2">
          <h2>Questions? </h2>
          <h2>Want to get in touch?</h2>
          <p>Contact Us!</p>
          <br />
          <Link to="/contact-us#contact-us-form">
            <div className="contact-button">Get in Touch</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
