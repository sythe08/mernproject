import React, {Component} from "react";
import "./index.css";
import NavBarConfig from "./config.js";

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    const navContent = NavBarConfig.map((section, index) => {
      return (
        <li className="navs" key={index + 100}><a href={section.path}>{section.name}</a></li>
     ) 
    });

    return (
      <div className="nav-container">
        <div className="navs logo">Logo</div>
        <ul className={this.state.isOpen ? "active" : "hidden"}>
          <div className="close" onClick={this.handleClick}>x</div>
          {navContent}
          <li className="navs"><a href="https://github.com/sythe08" rel="noreferrer" target="_blank">Github</a></li>
        </ul>
        <div className="menu" onClick={this.handleClick}>
          <span className="part"></span>
          <span className="part"></span>
          <span className="part"></span>
        </div>
      </div>
      );
  }
}

export default NavBar;