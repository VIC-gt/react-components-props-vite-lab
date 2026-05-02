import React from "react";
import logo from "../assets/logo";

function About({ about, image = logo }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;