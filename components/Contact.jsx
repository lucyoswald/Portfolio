import { Element } from "react-scroll";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

// Import your images
import GitHubIcon from "../assets/GitHub-Mark-removebg-preview.png";
import LinkedInIcon from "../assets/linkedin-removebg-preview.png";
import EmailIcon from "../assets/email-removebg-preview.png";

const Contact = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Element name="contact_section" className="contact_sec">
      <div className="contact_header">
        <h5>Contact</h5>
      </div>
      <div className="contact_icons">
        <a
          href="https://github.com/lucyoswald"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GitHubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/lucy-oswald-258056110/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedInIcon} alt="LinkedIn" />
        </a>
        <a href="mailto:lucy_oswald@hotmail.co.uk">
          <img src={EmailIcon} alt="Email" />
        </a>
      </div>
      {isVisible && (
        <FontAwesomeIcon
          icon={faArrowUp}
          onClick={scrollToTop}
          className={`fa-solid fa-arrow-up fa-bounce back-to-top ${theme}`}
        />
      )}
      <div className="copyright_div">
        <p class="copyright">&copy; Built by Lucy Oswald 2023</p>
      </div>
    </Element>
  );
};

export default Contact;
