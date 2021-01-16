import React from "react";
import Hero from "../Hero";
import Button from "../Button";
import "./index.css";

function Home() {
  
  return (
      <Hero bgColor="light">
        <div className="hero-body">
          <div className="hero-body-content" >
            <h1 className="heading" >Hi! My name is<span> Benjie Ben</span></h1>
            <p className="info" >I am an aspiring Web developer with a few experience in Web development.</p>
          </div>
          <Button btnColor="btn-light" btnSize="btn-large">Explore</Button>
        </div>
      </Hero>
    )
}

export default Home;