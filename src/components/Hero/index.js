import React from "react";
import "./index.css";

function Hero({children, bgColor}) {
  
  return(
    <>
      <div className={`hero-section ${bgColor === "dark" ? "dark" : "light"}`} >
        {children}
      </div>
    </>
    )
}

export default Hero;