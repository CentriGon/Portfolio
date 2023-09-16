import logo from './logo.svg';
import './App.css';
import { ToolIcon } from './Components/ToolIcon';
import { Project } from './Components/Project';
import { db } from "./Config/firebaseconfig.js"
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

function App() {

  const scrollDown = (locationScroll) => {
    console.log(locationScroll);
    window.scrollTo({
        top: locationScroll - 100,
        behavior: "smooth" // This provides a smooth scroll effect
    });
  }

  const messagesCollectionRef = collection(db, "Messages");

  const sendNewMessage = async (e) => {

    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    try {
      await addDoc(messagesCollectionRef, {
        name: name,
        email: email,
        message: message
      })
    }
    catch (e) {
      console.log(e)
    }
    console.log("done")
  }


  return (
    <div className="App">
      <div className="hero-section">
        <div className="hide-element">
          <h1> Noor Nile </h1>
        </div>
        <div className="hide-element">
          <h2> Full Stack Web Dev</h2>
        </div>
        <div className="red-circle"></div>
      </div>
      <img className="arrow-image" onClick={() => {scrollDown(document.querySelector(".tools-location").offsetTop)}}src={require("./Images/red_arrow-removebg-preview.png")} alt="Red arrow pointing down"/>
      <h1 style={{ marginTop: 200 + "px"}} className="tools-location"> Tools </h1>
      <div className="tools">
        <ToolIcon toolName={"HTML"} SRC={require("./Images/htmlIcon.png")}/>
        <ToolIcon toolName={"CSS"} SRC={require("./Images/cssIcon.png")}/>
        <ToolIcon toolName="JS" SRC={require("./Images/JSICon.png")}/>
        <ToolIcon toolName="React" SRC={require("./Images/reactIcon.png")}/>
        <ToolIcon toolName="MongoDB" SRC={require("./Images/mongoDB.png")}/>
        <ToolIcon toolName="Firebase" SRC={require("./Images/firebaseIcon.png")}/>
        <ToolIcon toolName="WebSocket" SRC={require("./Images/websocketIcon.png")}/>
        <ToolIcon toolName="Figma" SRC={require("./Images/figmaIcon.png")}/>
        <ToolIcon toolName="Express" SRC={require("./Images/expressLogoPng.png")}/>
        <ToolIcon toolName="Puppeteer" SRC={require("./Images/puppeteerLogo.png")}/>
      </div>
      <h1 className="projects-location" style={{marginTop: 100 + "px"}}> Projects </h1>
      <p style={{width: 60 + "%", marginTop: -35 + 'px',  marginBottom: -20 + 'px'}}> Warning: The servers used for these projects are hosted on Render.com, and they spin out of inactivity after 15 minutes. Please give them a few moments to spin back online.</p>
      <div className="projects">
        <Project projectName="Lead Saint" projectInfo="Full stack web app that accesses a custom coded server that finds b2b leads as well as their emails" SRC={require("./Images/LeadSaintIMG.png")} tools={[require("./Images/htmlIcon.png"), require("./Images/cssIcon.png"),require("./Images/JSICon.png"), require("./Images/figmaIcon.png"),require("./Images/firebaseIcon.png"),require("./Images/reactIcon.png")]} pageLink={"https://saint-leads.web.app/"}/>
        <Project projectName="Gov School Chem" projectInfo="Full stack web app that allows two users to connect to custom coded remote server that keeps them connected and serves questions" SRC={require("./Images/ChemQuizIMG.png")} tools={[require("./Images/htmlIcon.png"), require("./Images/cssIcon.png"),require("./Images/JSICon.png"), require("./Images/figmaIcon.png"),require("./Images/firebaseIcon.png"),require("./Images/websocketIcon.png"), require("./Images/reactIcon.png") ]}  pageLink={"https://chem-quiz-cf129.web.app/"}/>
        <Project projectName="Carvanah" projectInfo="Custom designed website that integrates API Ninja’s car api in order to display data." SRC={require("./Images/CarvanahIMG.png")} tools={[require("./Images/htmlIcon.png"), require("./Images/cssIcon.png"),require("./Images/JSICon.png"), require("./Images/figmaIcon.png"),require("./Images/firebaseIcon.png"),require("./Images/reactIcon.png") ]}  pageLink={"https://carvanah-b04f0.web.app/"}/>
      </div>
      <h1 className="projects-location"> Contact Me</h1>
      <form >
        <div className="form">
          <div className="name-and-email">
            <div>
              <label htmlFor="name"> Name: </label>
              <input type="text" id="name" name="name" required/>
            </div>
            <div>
              <label htmlFor="email"> Email: </label>
              <input type="email" id="email" name="email" required/>
            </div>
            </div>
            <div className="text-area">
                <label htmlFor="message"> Message: </label>
                <textarea id="message" required/>
              </div>
          </div>
          <button className="send-message" type="submit" onClick={(e) => {sendNewMessage(e)}} > Send Message </button>
      </form>

    </div>
  );
}

export default App;
