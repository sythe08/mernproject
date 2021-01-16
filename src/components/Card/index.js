import React from "react";
import Button from "../Button";
import {FaJs, FaDiscord} from "react-icons/fa";
import "./index.css";

function Card({
  cardHeading, 
  cardDescription, 
  cardPreviewImage, 
  tools, 
  cardBg
}){
  
  return (
    <div className={`card-container ${cardBg}`}>
      <h1 className="card-heading">{cardHeading}</h1>
      <div className="card-body">
      <div className="card-preview-image"><img src={cardPreviewImage} alt="card" /></div>
      <div className="description">{cardDescription} </div>
      <div className="tools">
        <FaDiscord/>
        <FaJs/>
      </div>
      <Button btnSize="btn-large" btnColor={cardBg === "light" ? "btn-light" : "btn-dark"} >Visit Github</Button>
      </div>
    </div>
    )
}

export default Card;