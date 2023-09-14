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
        <Project projectName="Lead Saint" projectInfo="Full stack web app that accesses a custom coded server that finds b2b leads as well as their emails" SRC={require("./Images/LeadSaintIMG.png")} tools={[require("./Images/htmlIcon.png"), require("./Images/cssIcon.png"),require("./Images/JSICon.png"), require("./Images/figmaIcon.png"),require("./Images/firebaseIcon.png"),require("./Images/reactIcon.png") ]}/>
        <Project projectName="Gov School Chem" projectInfo="Full stack web app that allows two users to connect to custom coded remote server that keeps them connected and serves questions" SRC={require("./Images/ChemQuizIMG.png")} tools={[require("./Images/htmlIcon.png"), require("./Images/cssIcon.png"),require("./Images/JSICon.png"), require("./Images/figmaIcon.png"),require("./Images/firebaseIcon.png"),require("./Images/websocketIcon.png"), require("./Images/reactIcon.png") ]}/>
        <Project projectName="Carvanah" projectInfo="Custom designed website that integrates API Ninja’s car api in order to display data." SRC={require("./Images/CarvanahIMG.png")} tools={[require("./Images/htmlIcon.png"), require("./Images/cssIcon.png"),require("./Images/JSICon.png"), require("./Images/figmaIcon.png"),require("./Images/firebaseIcon.png"),require("./Images/reactIcon.png") ]}/>
      </div>
    </div>
  );
}

export default App;
