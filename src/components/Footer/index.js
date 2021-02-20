import {FaReact,FaDiscord,FaFacebook,FaGithub} from "react-icons/fa";
import "./index.css";

function Footer(){
    return (
        <div className="footer-wrap">
        <div className="footer">
            <div className="footer-logo"><FaReact/><span>BenjieBen</span></div>
            <ul className="footer-content">
                <li><FaDiscord/> <a href="http://discord.com/users/void#3634">Discord</a></li>
                <li><FaFacebook/> <a href="https://facebook.com/benjiebengarcia">Facebook</a></li>
                <li><FaGithub/> <a href="https://github.com/sythe08">Github</a></li>
            </ul>
        </div>
        </div>
    )
}

export default Footer;