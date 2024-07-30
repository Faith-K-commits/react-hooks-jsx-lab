import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quidem dolores voluptatibus magnam veritatis, dolor minima, vitae a fugit unde veniam eos alias eaque, temporibus explicabo. Odit obcaecati debitis enim.</p>
    <img src={image} alt="I made this" />
  </div>;
}

export default About;
