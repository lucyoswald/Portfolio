import { Element } from "react-scroll";
import { Tab, Tabs } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

// Confident skills
import ReactIcon from "../assets/confident/React_icon.png";
import SassIcon from "../assets/confident/Sass_icon.png";
import VSIcon from "../assets/confident/VS_icon.png";
import NpmIcon from "../assets/confident/npm_icon.png";
import MongoDB from "../assets/confident/mongodb_icon.png";
import JS from "../assets/confident/JavaScript_icon.png";
import HTML from "../assets/confident/HTML5_icon.png";
import NodeIcon from "../assets/confident/node_icon.png";
import CssIcon from "../assets/confident/css3_icon.png";
import PostmanIcon from "../assets/confident/postman_icon.png";
import ExpressIcon from "../assets/confident/express_icon.png";
import Bootstrap_icon from "../assets/confident/Bootstrap_icon.png";
import Jira_icon from "../assets/confident/JIRA_icon.png";
import T_icon from "../assets/confident/Trello.png";

// Comfortable skills
import PythonIcon from "../assets/comfortable/Python_icon.png";
import DjangoIcon from "../assets/comfortable/django_icon.png";
import HerokuIcon from "../assets/comfortable/Heroku_icon.png";
import NetlifyIcon from "../assets/comfortable/Netlify_icon.png";
import JwtIcon from "../assets/comfortable/jwt_icon.png";
import GitIcon from "../assets/comfortable/Git_icon.png";
import GithubIcon from "../assets/comfortable/github_icon.png";

const Skills = ({ theme }) => {
  return (
    <Element name="skills_section">
      <div className={`skills ${theme}`}>
        <Tabs
          defaultActiveKey="confident"
          id="skillsTabs"
          className={`custom-tabs ${theme}`}
        >
          <Tab eventKey="confident" title="Confident" className="tab-pane">
            <div className={`confident_skills ${theme}`}>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    React
                  </Tooltip>
                }
              >
                <img src={ReactIcon} />
              </OverlayTrigger>
              {/* Repeat for all other Confident skills */}
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Sass
                  </Tooltip>
                }
              >
                <img src={SassIcon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    VS Code
                  </Tooltip>
                }
              >
                <img src={VSIcon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    NPM
                  </Tooltip>
                }
              >
                <img src={NpmIcon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    MongoDB
                  </Tooltip>
                }
              >
                <img src={MongoDB} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    JavaScript
                  </Tooltip>
                }
              >
                <img src={JS} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    HTML5
                  </Tooltip>
                }
              >
                <img src={HTML} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Node.js
                  </Tooltip>
                }
              >
                <img src={NodeIcon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    CSS3
                  </Tooltip>
                }
              >
                <img src={CssIcon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Postman
                  </Tooltip>
                }
              >
                <img src={PostmanIcon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Express.js
                  </Tooltip>
                }
              >
                <img src={ExpressIcon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Bootstrap
                  </Tooltip>
                }
              >
                <img src={Bootstrap_icon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    JIRA
                  </Tooltip>
                }
              >
                <img src={Jira_icon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    TRELLO
                  </Tooltip>
                }
              >
                <img src={T_icon} />
              </OverlayTrigger>

              {/* <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Trello
                  </Tooltip>
                }
              >
                <img src={Trello_icon} />
              </OverlayTrigger> */}
            </div>
          </Tab>
          <Tab eventKey="comfortable" title="Comfortable" className="tab-pane">
            <div className={`comfortable_skills ${theme}`}>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Python
                  </Tooltip>
                }
              >
                <img src={PythonIcon} />
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Django
                  </Tooltip>
                }
              >
                <img src={DjangoIcon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Heroku
                  </Tooltip>
                }
              >
                <img src={HerokuIcon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Netlify
                  </Tooltip>
                }
              >
                <img src={NetlifyIcon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    JsonWebToken
                  </Tooltip>
                }
              >
                <img src={JwtIcon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Git
                  </Tooltip>
                }
              >
                <img src={GitIcon} />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Github
                  </Tooltip>
                }
              >
                <img src={GithubIcon} />
              </OverlayTrigger>
            </div>
          </Tab>
        </Tabs>
      </div>
    </Element>
  );
};

export default Skills;
