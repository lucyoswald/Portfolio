/* eslint-disable react/prop-types */
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = ({ theme }) => {
  const projects = [
    {
      imageSrc: "assets/reuse_network_home.png",
      alt: "Reuse Network",
      title: "SEI Project 4 - The Reuse Network",
      timing: "Solo project | 2 weeks",
      skills: [
        "./assets/confident/React_icon.png",
        "./assets/comfortable/Python_icon.png",
        "./assets/confident/Sass_icon.png",
        "./assets/confident/JavaScript_icon.png",
        "./assets/confident/VS_icon.png",
        "./assets/confident/HTML5_icon.png",
        "./assets/confident/css3_icon.png",
        "./assets/confident/postman_icon.png",
        "./assets/confident/node_icon.png",
        "./assets/comfortable/Heroku_icon.png",
        "./assets/comfortable/Netlify_icon.png",
        "./assets/confident/Bootstrap_icon.png",
        "./assets/comfortable/django_icon.png",
      ],
      description:
        "Created The Reuse Network, a Python-React full stack app that enables users to upload, browse, and search for local posts about free furniture. Users can sign up, log in, create, modify, and remove posts, and engage in discussions through comments.",
      githubLink:
        "https://github.com/lucyoswald/SEI-Project-4-Frontend-Reuse-Network",
      liveSiteLink: "https://the-reuse-network.netlify.app/",
    },
    {
      imageSrc: "assets/travel_app.png",
      alt: "Travel App",
      title: "SEI Project 3 - Travel App",
      timing: "Group project | 2 weeks",
      skills: [
        "./assets/confident/React_icon.png",
        "./assets/confident/Sass_icon.png",
        "./assets/confident/JavaScript_icon.png",
        "./assets/confident/VS_icon.png",
        "./assets/comfortable/Netlify_icon.png",
        "./assets/confident/mongodb_icon.png",
        "./assets/confident/HTML5_icon.png",
        "./assets/confident/express.icon.png",
        "./assets/confident/css3_icon.png",
        "./assets/confident/node_icon.png",
        "./assets/confident/postman_icon.png",
        "./assets/confident/Bootstrap_icon.png",
      ],
      description:
        "Developed a collaborative Travel App using the MERN stack with CRUD functionality, allowing users to search for countries, explore activities, create personalized itineraries, and track popularity efficiently.",
      githubLink: "https://github.com/lucyoswald/Travel-App",
      liveSiteLink: "https://designmytrip.netlify.app/",
    },
    {
      imageSrc: "assets/weather_app.png",
      alt: "SEI Project 2 - Weather App",
      title: "SEI Project 2 - Weather App",
      timing: "Solo project | 1 week",
      skills: [
        "./assets/confident/React_icon.png",
        "./assets/confident/Sass_icon.png",
        "./assets/confident/node_icon.png",
        "./assets/confident/express.icon.png",
        "./assets/confident/css3_icon.png",
        "./assets/confident/HTML5_icon.png",
        "./assets/confident/JavaScript_icon.png",
        "./assets/confident/VS_icon.png",
      ],
      description:
        "Built a front-end React web app using a free public API, allowing users to search for cities and view current weather information displayed as weather cards. The app also includes pages for tracking increased ocean temperatures over the years and accessing climate change articles through external APIs.",
      githubLink: "https://github.com/lucyoswald/SEI-Project-2-Weather-App",
      liveSiteLink: "https://glittery-dodol-1d8d5c.netlify.app/",
    },
    {
      imageSrc: "assets/buffy_game.png",
      alt: "Buffy Space Invaders",
      title: "SEI Project 1 - Buffy Space Invaders",
      timing: "Solo project | 2 weeks",
      skills: [
        "./assets/confident/JavaScript_icon.png",
        "./assets/confident/css3_icon.png",
        "./assets/confident/HTML5_icon.png",
        "./assets/confident/VS_icon.png",
      ],
      description:
        "Developed a grid-based Space Invaders game using JavaScript, HTML, and CSS, which allowed me to strengthen my fundamental JS skills and gain proficiency in CSS and HTML. The game was designed with a Buffy The Vampire Slayer theme, reflecting my enthusiasm for the show and adding an element of enjoyment to the development process.",
      githubLink:
        "https://github.com/lucyoswald/SEI-Project-1-Buffy-Space-Invaders",
      liveSiteLink:
        "https://lucyoswald.github.io/SEI-Project-1-Buffy-Space-Invaders/",
    },
  ];
  return (
    <div className={`projects_section ${theme}`}>
      <Carousel
        interval={5000}
        className={theme}
        nextIcon={
          <span
            style={{
              color: theme === "light" ? "black" : "white",
            }}
            aria-hidden="true"
          >
            &gt;
          </span>
        }
        prevIcon={
          <span
            style={{
              color: theme === "light" ? "black" : "white",
            }}
            aria-hidden="true"
          >
            &lt;
          </span>
        }
      >
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <div className="project_item">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={project.imageSrc}
                    alt={project.alt}
                    className="project_image"
                  />
                </div>
                <div className="col-md-6">
                  <div className="text_box">
                    <h6>{project.title}</h6>
                    <p className="timing_title">{project.timing}</p>
                    <div className={`icon_section_project ${theme}`}>
                      {project.skills.map((skill, index) => (
                        <img key={index} src={skill} alt={`Skill ${index}`} />
                      ))}
                    </div>
                    <p>{project.description}</p>
                    <div className="button_group">
                      <a
                        className={`github_button ${theme}`}
                        target="_blank"
                        href={project.githubLink}
                        rel="noreferrer"
                      >
                        <FaGithub className="github_icon" /> Github
                      </a>
                      <a
                        className={`live_site_button ${theme}`}
                        target="_blank"
                        href={project.liveSiteLink}
                        rel="noreferrer"
                      >
                        <FaLink className="link_icon" /> Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
