import React from "react";
import "./portfolio.scss";
import { Link } from "react-router-dom";

export default function portfolio() {
  return (
    <div className="portfolio">
      <div>
        <ul>
          <h2>
            <p>Effects with only vanilla javascript</p>
          </h2>
          <br />
          <br />
          <li>
            <Link to="/parallax_astronaut">
              Parallax Astronaut(use desktop for full effect
            </Link>
          </li>
          <br />
          <br />

          <h2>Online Forum for RPGs</h2>
          <br />
          <br />

          <li>
            <a
              href="https://pacific-retreat-51764.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              LFG forum
              <br />
              (demo day project for BrainStation)
            </a>
          </li>
          <br />
          <br />
        </ul>

        <h3> More On The Way!</h3>
        <br />
        <br />
        <h2> More ways to get in touch!</h2>
        <br />
        <a
          href="https://www.linkedin.com/in/felipe-villa-jr"
          target="_blank"
          rel="noreferrer"
        >
          My Linkedin
        </a>
      </div>
    </div>
  );
}
