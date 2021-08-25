import React from "react";
import "./about.scss";
import bs from "../../assets/images/brainstation.png";
export default function about() {
  return (
    <div className="about">
      <div className="about-me">
        <h1>Hello!</h1>
        <br />
        <h2>I am Felipe VIlla</h2>
        <div className="about-me-img1" alt="felipe villa"></div>
        <br />
        <p className="about-me-content">
          Born and raised in <i>Miami,Florida</i> from two Colombian-American
          Immigrants in the 90s. I am natively proficient in both English and
          Spanish.
        </p>
        <br />
        <h2>Life Long Learner</h2>
        <br />
        <p>
          <ul className="about-me-list">
            <li>
              I studied at <i>Florida International University</i> in 2010
            </li>
            <li>
              <i>Miami-Dade College</i> in 2012
            </li>
            <li>
              Graduated <i>BrainStation</i> in 2021 with a degree in Web
              development with a focus on ReactJS and NodeJS.
            </li>
          </ul>
        </p>
        <img className="about-me-img2" src={bs} alt="brainstation logo" />
        <br />
        <h2>Hobbies/Geekness</h2>
        <br />
        <p className="about-me-content">
          My hobbies include MMORPGS, RPGS, MOBAS, the occasional DnD tabletop
          game and I enjoy running and working out.
        </p>
        <br />
        <h2>Artisticly Inclined</h2>
        <br />
        <p className="about-me-content">
          I spend my free time hanging out with family and writing too! I've
          been playing guitar, drawing, and writing since I was fourteen but my
          passion for technology has always been greater.
        </p>
        <br />
        <p className="about-me-content">
          I love to learn new things and breaking things down to understand
          them.
        </p>
      </div>
    </div>
  );
}
