import {useState} from "react";
import "./index.css";
import NavBarConfig from "./config.js";
import {FaArrowCircleLeft, FaReact} from "react-icons/fa/";

function NavBar(){
  const [isOpen, setOpenStatus] = useState(false);
  const navContent = NavBarConfig.map((section, index) => {
    return (
      <li className="navs" key={index + 100}><a href={section.path}>{section.name}</a></li>
   ) 
  });
  const handleClick = ()=> setOpenStatus(!isOpen);

  return (
    <div className="nav-container">
        <div className="navs logo"><FaReact/> Benjie Ben</div>
        <ul className={isOpen ? "active" : "hidden"}>
          <div className="close" onClick={handleClick}><FaArrowCircleLeft/></div>
          {navContent}
          <li className="navs"><a href="https://github.com/sythe08" rel="noreferrer" target="_blank">Contact Me</a></li>
        </ul>
        <div className="menu" onClick={handleClick}>
          <span className="part"></span>
          <span className="part"></span>
          <span className="part"></span>
        </div>
      </div>
  );
}

export default NavBar;