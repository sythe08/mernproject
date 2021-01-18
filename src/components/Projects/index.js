import React from "react";
import "./index.css";
import projectData from "./data";

function Project({heading, description, previewImage, githubUrl, cName, tools}) {
  
  return (
    <>
     <div className={`project ${cName === "dark"? "project-dark" : "project-light"}`} >
      <h1>{heading}</h1>
      <div className="project-body">
        <div className="project-image" style={{background: `url(${previewImage})`, backgroundRepeat: "no-repeat"}} >
        </div>
        <div className="tools">
          {tools}
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
    key={index+39384} heading={project.heading} description={project.description}
    githubUrl={project.githubUrl} cName={project.cName}
    previewImage={project.previewImage}
    tools={project.tools}
    />)
  });
  
  return (
    <div className="project-section">
      <h1>Projects</h1>
      {ProjectList}
    </div>
    )
}

export default Projects;
