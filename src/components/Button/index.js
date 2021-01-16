import React from "react";
import "./index.css";

const Sizes = ["btn-small", "btn-medium", "btn-large"], 
      Colors = ["btn-light", "btn-dark", "btn-normal"];

function Button({
children, 
btnColor, 
btnSize, 
clickHandler
}){
  
  const size = Sizes.includes(btnSize) ? btnSize : Sizes[0], 
        color = Colors.includes(btnColor) ? btnColor : Colors[0];
  
  return (
    <>
      <button className={`btn ${color} ${size}`} onClick={clickHandler} >{children}</button>
    </>
    )
}

export default Button;