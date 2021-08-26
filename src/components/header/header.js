import React from "react";
import "./header.scss";
// import searchIcon from "../../assets/images/binoculars.png";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">@FelipeVillaJr</div>
      </Link>

      <section className="header__rightside">
        <div className="search">
          {/* <img className="search__icon" src={searchIcon} alt="searchIcon" /> */}
        </div>
        <div className="menu">
          {/* <img className="menu__icon dropbtn" src={menuIcon} alt="menuIcon" /> */}

          <Link to="/Portfolio">Work</Link>
          <Link to="/about">About</Link>
        </div>
      </section>
    </div>
  );
}
