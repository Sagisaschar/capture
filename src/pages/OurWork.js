import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";
// Page animation
import { motion } from "framer-motion";
import { pageAnimation, imageAnim, fade, lineAnim } from "../animation";

const OurWork = () => {
  return (
    <Work
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Movie>
        <motion.h2 variants={fade}>Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={imageAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 100vh;
  overflow: hidden;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
