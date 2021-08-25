import React from "react";
import "./parallax_astronaut.scss";
import astro from "../../../assets/images/parallax_astronaut/astro.png";

export default function parallax_astronaut() {
  function handleMouseMove(e) {
    let w = e.clientX;
    let h = e.clientY;

    let layer = document.querySelector("#astro");

    layer.style.transform =
      "translateX(-" + w / 30 + "%) translateY(-" + h / 30 + "%)";
  }
  return (
    <div className="main-body">
      <div className="bg"></div>
      <div onMouseMove={(e) => handleMouseMove(e)} id="parallax">
        <img id="astro" alt="astronaut" src={astro} />
      </div>
    </div>
  );
}
