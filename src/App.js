import React from "react";
import NavBar from "./components/Navbar/";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./index.css";

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Projects/>
    </>
  );
}

export default App;
