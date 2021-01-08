import React, {Component} from "react";
import "./index.css";
import NavBarConfig from "./config.js";

class NavBar extends Component {
  render(){
    const navContent = NavBarConfig.map((section, index) => {
      return (
        <li className="navs" key={index + 100}><a href={section.path}>{section.name}</a></li>
     ) 
    });
    
    return (
      <div className="nav-container">
        <div className="navs logo"></div>
        <ul>
          {navContent}
        </ul>
        <div className="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      );
  }
}

export default NavBar;