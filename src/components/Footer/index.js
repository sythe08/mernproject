import {FaReact,FaDiscord,FaFacebook,FaGithub} from "react-icons/fa";
import "./index.css";

function Footer(){
    return (
        <div className="footer-wrap">
        <div className="footer">
            <div className="footer-logo"><FaReact/><span>BenjieBen</span></div>
            <ul className="footer-content">
                <li><FaDiscord/> <a href="/">Discord</a></li>
                <li><FaFacebook/> <a href="/">Facebook</a></li>
                <li><FaGithub/> <a href="/">Github</a></li>
            </ul>
        </div>
        </div>
    )
}

export default Footer;