
class ProjectData {
  constructor(heading, description, previewImage, githubUrl, tools){
    this.heading = heading || "Coming Soon!";
    this.description = description || "Coming Soon!";
    this.previewImage = previewImage;
    this.githubUrl = githubUrl;
    this.cName = "light";
  }
}

const projectData = [
  new ProjectData("Discord Bot",
   "This project is still in development, if you want to contribute just click the button bellow.",
   "https://i.imgur.com/0SRsVrE.png",
   "https://github.com/sythe08"),
  new ProjectData("Website made with ReactJs",
    "This project is still in development, if you want to contribute just click the button bellow.",
    "https://i.imgur.com/0SRsVrE.png",
    "https://github.com/sythe08"),
  new ProjectData("",
    "This project is still in development, if you want to contribute just click the button bellow.",
    "https://i.imgur.com/0SRsVrE.png",
    "https://github.com/sythe08")
];

export default projectData;