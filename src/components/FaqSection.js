import styled from "styled-components";
import { StyledAbout } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quibusdam ab ipsam porro eligendi earum sunt in excepturi enim ad?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quibusdam ab ipsam porro eligendi earum sunt in excepturi enim ad?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Diferrent Payment Method</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quibusdam ab ipsam porro eligendi earum sunt in excepturi enim ad?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Product do you offer.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quibusdam ab ipsam porro eligendi earum sunt in excepturi enim ad?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
