import home1 from "../img/home1.png";
// Import styled
import styled from "styled-components";
import { StyledAbout, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have profesionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </StyledAbout>
  );
};

export default AboutSection;
