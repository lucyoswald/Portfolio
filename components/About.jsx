import { Element } from "react-scroll";
import { useState, useEffect } from "react";
// eslint-disable-next-line react/prop-types
const About = ({ theme }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 800;
  const boxStyles = {
    width: isMobile ? "450px" : "750px",
    padding: "30px",
  };

  return (
    <Element name="about_section">
      <div className={`about_text ${theme}`}>
        <div className={`about_box ${theme}`} style={boxStyles}>
          <h5>
            {" "}
            Matcha Lover | Software Engineer | Animal Crossing Enthusiast
          </h5>

          <p className="my_text">
            With 6 years experience as an Executive Assistant in various
            industries, such as Fashion, Tech, and Media Investment, I have
            acquired a vast range of skills that I believe give me the ability
            to adapt to any environment. <br /> <br />
            I've always had a great interest and a keen curiosity in tech.
            I&apos;m a natural problem solver so really enjoyed the satisfaction
            I felt while completing problems, I discovered this when building my
            own menu on a game via codecademy. So I made the decision to take
            the leap while working full time and take on General Assembly&apos;s
            24-week Software Engineering course, I developed my coding abilities
            and it really ignited my passion for the Tech industry. <br />
            <br />I am excited to contribute my enthusiasm, curiosity, and
            dedication to a collaborative team.
            <br />
            <br />
            <p className="interests"> Interests </p>
            I used to cook professionally and I've really come to love all
            things food. Been thinking about starting a food blog soon to share
            my passion. On the gaming side, I've got a soft spot for Animal
            Crossing. There's something really relaxing about its creative
            gameplay and community vibes.
            <br />
            <br />
            Feel free to explore my projects!
          </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
