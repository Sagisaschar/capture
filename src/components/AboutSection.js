import home1 from "../img/home1.png";
import { StyledAbout, Description, Image, Hide } from "../styles";
// Framer Motion
import { motion } from "framer-motion";
import { h2Anim, fade, imageAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <>
      <StyledAbout>
        <Description>
          <motion.div>
            <Hide>
              <motion.h2 variants={h2Anim}>We work to make</motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={h2Anim}>
                your <span>dreams</span> come
              </motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={h2Anim}>true.</motion.h2>
            </Hide>
          </motion.div>
          <motion.p variants={fade}>
            Contact us for any photography or videography ideas that you have.
            We have profesionals with amazing skills.
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </Description>
        <Image>
          <motion.img
            variants={imageAnim}
            src={home1}
            alt="guy with a camera"
          />
        </Image>
        <Wave />
      </StyledAbout>
    </>
  );
};

export default AboutSection;
