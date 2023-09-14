import logo from './logo.svg';
import './App.css';
import { ToolIcon } from './Components/ToolIcon';
import { Project } from './Components/Project';

function App() {

  const scrollDown = (locationScroll) => {
    console.log(locationScroll);
    window.scrollTo({
      top: locationScroll - 100,
      behavior: "smooth" // This provides a smooth scroll effect
    });

  }
  return (
    <div className="App">
      <div className="hero-section">
        <div className="hide-element">
          <h1> Noor Ahmad</h1>
        </div>
        <div className="hide-element">
          <h2> Full Stack Web Dev</h2>
        </div>
        <div className="red-circle"></div>
      </div>
      <img className="arrow-image" onClick={() => {scrollDown(document.querySelector(".tools-location").offsetTop)}}src={require("./Images/red_arrow-removebg-preview.png")} alt="Red arrow pointing down"/>
      <h1 style={{color: "white", marginTop: 200 + "px"}} className="tools-location"> Tools </h1>
      <div className="tools">
        <ToolIcon toolName={"HTML"} SRC={require("./Images/htmlIcon.png")}/>
        <ToolIcon toolName={"CSS"} SRC={require("./Images/cssIcon.png")}/>
        <ToolIcon toolName="JS" SRC={require("./Images/JSICon.png")}/>
        <ToolIcon toolName="React" SRC={require("./Images/reactIcon.png")}/>
        <ToolIcon toolName="MongoDB" SRC={require("./Images/mongoDB.png")}/>
        <ToolIcon toolName="Firebase" SRC={require("./Images/firebaseIcon.png")}/>
        <ToolIcon toolName="WebSocket" SRC={require("./Images/websocketIcon.png")}/>
        <ToolIcon toolName="Figma" SRC={require("./Images/figmaIcon.png")}/>
      </div>
      <h1 className="projects-location" style={{marginTop: 100 + "px"}}> Projects </h1>
      <div className="projects">
        <Project projectName="Lead Saint" projectInfo="Full stack web app that accesses a custom coded server that finds b2b leads as well as their emails" SRC={require("./Images/LeadSaintIMG.png")} tools={[require("./Images/JSICon.png"), require("./Images/cssIcon.png")]}/>
      </div>
    </div>
  );
}

export default App;
