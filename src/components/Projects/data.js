import * as Icons from "react-icons/fa";

const projectData = [
  {
    heading: "Discord Bot",
    description: "This project is still in development, if you want to contribute just click the button bellow.",
    previewImage: "https://i.imgur.com/di2u4fy_d.webp?maxwidth=640&shape=thumb&fidelity=medium", 
    githubUrl: "https://github.com/sythe08",
    cName: ((arr)=>arr[Math.floor(Math.random()*arr.length)])(["dark", "light"]), 
    tools: [<Icons.FaDiscord/>, <Icons.FaJs/>]
  },
  {
    heading: "Website made with ReactJs",
    description: "This project is still in development, if you want to contribute just click the button bellow.",
    previewImage: "https://i.imgur.com/di2u4fy_d.webp?maxwidth=640&shape=thumb&fidelity=medium", 
    githubUrl: "https://github.com/sythe08",
    cName: ((arr)=>arr[Math.floor(Math.random()*arr.length)])(["dark", "light"]),
    tools: [<Icons.FaReact/>, <Icons.FaJs/>]
  },
  {
    heading: "Doujin Downloader",
    description: "This project is still in development, if you want to contribute just click the button bellow.",
    previewImage: "https://i.imgur.com/di2u4fy_d.webp?maxwidth=640&shape=thumb&fidelity=medium", 
    githubUrl: "https://github.com/sythe08",
    cName: ((arr)=>arr[Math.floor(Math.random()*arr.length)])(["dark", "light"]),
    tools: [<Icons.FaJs/>]
  },
];

export default projectData;