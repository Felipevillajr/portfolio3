import React from "react";
import "./footer.scss";
import insta from "../../assets/images/instagram.png";
import email from "../../assets/images/email.png";

export default function footer() {
  return (
    <div className="footer">
      <div>office address</div>
      <div>social media</div>
      <a
        href="https://www.instagram.com/felipe_villain/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="img_insta" src={insta} alt="instagram logo" />
      </a>
      <img className="img_email" src={email} alt="email logo" />
      <div>Services</div>
      <div>insights & news </div>
      <div className="legalise">
        <div>© Copyright 2021 Felipe Villa, All rights Reserved</div>
      </div>
    </div>
  );
}
