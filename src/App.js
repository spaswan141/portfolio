import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home, About, Skills,Experience,Contact, Footer } from "./components";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import "./components/styles.css";
import "./components/button.css";
import  logo from "./media/s.png"
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
 

return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Navbar
        expand="lg"
        className="navbar"
        data-theme={darkMode ? "dark" : "light"}
      >
        <img
          style={{ width: "10%", height: "5%", marginLeft: "1%" }}
          src={logo}
          alt=""
        />
        <Navbar.Brand href="#home" className="navname">
          Welcome
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about" className="link">
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="link">
              Skills
            </Nav.Link>
            <Nav.Link href="#experience" className="link">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="link">
              Contact
            </Nav.Link>
          </Nav>
          <Button
            // style={{marginLeft:"40%"}}
            className="mode-button"
            onClick={toggleDarkMode}
            variant={darkMode ? "outline-light" : "outline-dark"}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}{" "}
            <FontAwesomeIcon className="dark" size="lg" icon={faAdjust} spin />
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <div id="home">
        <Home darkMode={darkMode} />
      </div>
      <div id="about">
        <About darkMode={darkMode} />
      </div>
      <div id="skills">
        <Skills darkMode={darkMode} />
      </div>
      <div id="experience">
        <Experience darkMode={darkMode} />
      </div>
      <div id="contact">
        <Contact darkMode={darkMode} />
      </div>
      <Footer />

      <br></br>
    </div>
  );
}

export default App;
