import React from "react";
import "./header.scss";
import searchIcon from "../../assets/images/binoculars.png";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div className="header">
      <a
        href="https://www.instagram.com/felipe_villain/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="logo">@FelipeVillain</div>
      </a>

      <section className="header__rightside">
        <div className="search">
          <img className="search__icon" src={searchIcon} alt="searchIcon" />
        </div>
        <div className="menu dropdown">
          {/* <img className="menu__icon dropbtn" src={menuIcon} alt="menuIcon" /> */}
          <div className="menu__icon dropbtn"></div>
          <div className="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/learn-more">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
