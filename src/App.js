import logo from './logo.svg';
import './App.css';

function App() {
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
      <img className="arrow-image"src={require("./Images/red_arrow-removebg-preview.png")} alt="Red arrow pointing down"/>
    </div>
  );
}

export default App;
