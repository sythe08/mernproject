import React from "react";
import "./index.css";
import projectData from "./data";

function Project({heading, description, previewImage, githubUrl, cName, tools}) {
  
  return (
    <>
     <div key={Math.random()} className={`project ${cName === "dark"? "project-dark" : "project-light"}`} >
      <h1>{heading}</h1>
      <div className="project-body">
        <div className="project-image" style={{background: `url(${previewImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} >
        </div>
      </div>
      <div className="project-description" >
          <p>{description}</p>
          <a className="redirectBtn" href={githubUrl}>Visit Github</a>
      </div> 
     </div>
    </>
    )
}

function Projects() {
  
  const ProjectList = projectData.map((project, index)=>{
    return (<Project 
    key={index+Math.random()} heading={project.heading} description={project.description}
    githubUrl={project.githubUrl} cName={project.cName}
    previewImage={project.previewImage}
    tools={project.tools}
    />)
  });
  
  return (
    <div id="project" className="project-section">
      <h1>Projects</h1>
      <div className="project-list">{ProjectList}</div>
    </div>
    )
}

export default Projects;
