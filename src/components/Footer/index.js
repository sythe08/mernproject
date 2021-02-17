import React from "react";
import {FaReact, FaGithub, FaDiscord, FaFacebook} from "react-icons/fa";
import "./index.css";

function Footer(){

    return (
        <div className="footer">
            <div className="footer-logo"><FaReact/> Benjie Ben</div>
            <ul className="footer-content">
                <li><FaGithub/> <span><a href="https://github.com/sythe08/sythe08">Github</a></span></li>
                <li><FaFacebook/> <span><a href="https://facebook.com/benjiebengarcia">Facebook</a></span></li>
                <li><FaDiscord/> <span><a href="https://github.com/sythe08/sythe08">Discord</a></span></li>
            </ul>
        </div>
    )
}

export default Footer;