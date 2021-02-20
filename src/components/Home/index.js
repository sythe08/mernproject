import {FaArrowCircleDown} from "react-icons/fa";
import "./index.css";

function Home() {
  return (
      <div className="hero-section">
        <div className="hero-body">
          <div className="hero-body-content" >
            <h1 className="heading" >Hi! I am <span>Benjie Ben</span></h1>
            <p className="info" >I am an aspiring Web Developer with a few experience in web development.</p>
          </div>
          <div className="explore-wrap">
            <a className="exploreBtn" href="#project"><FaArrowCircleDown style={{color: "var(--dark)"}}/></a>
            <span>Explore</span>
          </div>
        </div>
      </div>
    )
}

export default Home;