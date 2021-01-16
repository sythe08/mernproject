import React from "react";
import Hero from "../Hero";
import Card from "../Card";
import "./index.css";

function Projects() {
  
  return (
    <Hero bgColor="dark">
      <div className="projects-body">
        <Card cardBg="light" cardHeading="Discord Bot" cardDescription="I've made this project because of boredom, you can get this bot by visiting my github." />
      </div>
    </Hero>
    )
}

export default Projects;