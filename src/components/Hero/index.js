import React, {Component} from "react";
import "./index.css";

class Hero extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="hero">
                {props.children}
            </div>
        )
    }
}

export default Hero;