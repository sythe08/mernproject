import * as Icons from "react-icons/fa";

class ProjectData {
  constructor(heading, description, previewImage, githubUrl, tools){
    this.heading = heading || "Coming Soon!";
    this.description = description || "Coming Soon!";
    this.previewImage = previewImage;
    this.githubUrl = githubUrl;
    this.cName = ((arr)=>arr[Math.floor(Math.random() * arr.length)])(["dark", "light"]);
    this.tools = tools;
  }
}

const projectData = [
  new ProjectData("Discord Bot",
   "This project is still in development, if you want to contribute just click the button bellow.",
   "https://i.imgur.com/di2u4fy_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
   [<Icons.FaDiscord/>, <Icons.FaJs/>]),
  new ProjectData("Website made with ReactJs",
    "This project is still in development, if you want to contribute just click the button bellow.",
    "https://i.imgur.com/di2u4fy_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
    [<Icons.FaReact/>, <Icons.FaJs/>]),
  new ProjectData("",
    "This project is still in development, if you want to contribute just click the button bellow.",
    "https://i.imgur.com/di2u4fy_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
    [<Icons.FaJs/>]),
];

export default projectData;