import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Typist from "react-typist-component";
import About from "../components/About";
import { Link } from "react-scroll";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import logo from "../assets/128851704_padded_logo-removebg-preview.png";
import { useEffect, useRef, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    image.classList.add("animate");
  }, []);
  return (
    <div>
      <Navbar className={`custom-navbar sticky-top ${theme}`} expand="lg">
        <Navbar.Brand>
          <header className={`header ${theme}`}>
            <img src={logo} alt="Logo" className={`logo ${theme}`} />{" "}
            <p className={`name ${theme}`}>Lucy Oswald</p>
          </header>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-collapse" />
        <Navbar.Collapse id="navbar-nav" className="custom-collapse">
          <Nav className="ml-auto justify-content-end ">
            <Nav.Link
              as={Link}
              to="about_section"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              ABOUT ME
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="skills_section"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              SKILLS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="projects_section"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              PROJECTS
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="contact_section"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <button
        style={{ position: "absolute", top: "3rem", right: "3rem" }}
        onClick={toggleTheme}
        className={`toggle_button ${theme}`}
      >
        {theme === "dark" ? (
          <LightModeOutlinedIcon className={`brightness ${theme}`} />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className={`moon fa-bounce ${theme}`}
          />
        )}
      </button>
      <div className={`home_background ${theme}`}>
        <div>
          <div className="typist_container">
            <div className="typist_text_container">
              <Typist key={theme}>
                <h5 className={`typist_text ${theme}`}>
                  <span className="highlight"> HELLO! I&apos;M LUCY</span>
                  <br />
                  A Junior Software Engineer <br />
                  Based in London.
                </h5>
              </Typist>
            </div>
            <div className="image_container">
              <img
                src={"../assets/vector.png"}
                alt="Vector"
                className="girl animate"
                ref={imageRef}
              />
            </div>
          </div>
        </div>
        <About theme={theme} name="about_section" />
        <Skills theme={theme} name="skills_section" />
        <Projects theme={theme} name="projects_section" />
        <Contact theme={theme} name="contact_section" />
      </div>
    </div>
  );
};

export default Home;
