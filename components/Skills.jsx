/* eslint-disable react/prop-types */
import { Element } from "react-scroll";
import { Tab, Tabs } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
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
                <img src="./assets/confident/React_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Sass
                  </Tooltip>
                }
              >
                <img src="./assets/confident/Sass_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    VS Code
                  </Tooltip>
                }
              >
                <img src="./assets/confident/VS_icon.png" />
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    NPM
                  </Tooltip>
                }
              >
                <img src="./assets/confident/npm_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    MongoDB
                  </Tooltip>
                }
              >
                <img src="./assets/confident/mongodb_icon.png" />
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    JavaScript
                  </Tooltip>
                }
              >
                <img src="./assets/confident/JavaScript_icon.png" />
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    HTML5
                  </Tooltip>
                }
              >
                <img src="./assets/confident/HTML5_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Node.js
                  </Tooltip>
                }
              >
                <img src="./assets/confident/node_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    CSS3
                  </Tooltip>
                }
              >
                <img src="./assets/confident/css3_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Postman
                  </Tooltip>
                }
              >
                <img src="./assets/confident/postman_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Express.js
                  </Tooltip>
                }
              >
                <img src="./assets/confident/express.icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Bootstrap
                  </Tooltip>
                }
              >
                <img src="./assets/confident/Bootstrap_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    JIRA
                  </Tooltip>
                }
              >
                <img src="./assets/confident/JIRA_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Trello
                  </Tooltip>
                }
              >
                <img src="./assets/confident/Trello.png" />
              </OverlayTrigger>
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
                <img src="./assets/comfortable/Python_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Django
                  </Tooltip>
                }
              >
                <img src="./assets/comfortable/django_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Heroku
                  </Tooltip>
                }
              >
                <img src="./assets/comfortable/Heroku_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Netlify
                  </Tooltip>
                }
              >
                <img src="./assets/comfortable/Netlify_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    JsonWebToken
                  </Tooltip>
                }
              >
                <img src="./assets/comfortable/jwt_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Git
                  </Tooltip>
                }
              >
                <img src="./assets/comfortable/Git_icon.png" />
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="edit-tooltip" style={{ fontSize: "10px" }}>
                    Github
                  </Tooltip>
                }
              >
                <img src="./assets/comfortable/github_icon.png" />
              </OverlayTrigger>
            </div>
          </Tab>
        </Tabs>
      </div>
    </Element>
  );
};

export default Skills;
