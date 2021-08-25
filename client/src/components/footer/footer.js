import React from "react";
import "./footer.scss";
import insta from "../../assets/images/instagram.png";
import email from "../../assets/images/email.png";

export default function footer() {
  return (
    <div className="footer">
      <p>11500 NW 60th Terrace APT#375, Doral, FL 33178</p>
      <br />

      <p>Office Hours: 10am - 6pm EST Monday-Friday </p>
      <br />
      <p>CONTACT US</p>
      <br />
      <p>(786) 571 0027</p>
      <br />
      <div className="footer-social">
        <a
          href="https://www.instagram.com/felipe_villain/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="img_insta" src={insta} alt="instagram logo" />
        </a>
        <a href="mailto:felipevilla.webdev@gmail.com">
          <img className="img_email" src={email} alt="email logo" />
        </a>
      </div>

      <br />

      <div className="legalise">
        <div>© Copyright 2021 Felipe Villa, All rights Reserved</div>
      </div>
    </div>
  );
}
