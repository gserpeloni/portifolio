import Social from "../Social";
import { QuemSouEuDiv } from "./style.js";

const QuemSouEu: React.FC = () => {
  return (
      <QuemSouEuDiv>


          <div className="Banner">
              <div className="imgDiv">
                <img
                  src="https://ca.slack-edge.com/TP47N1UB0-U01R5T13Q4D-435422d94e89-512"
                  alt="me"
                />
              </div>
              <div className="descriptionDiv">
                  <div className="title"> Welcome to my portifolio, </div>
                  <div className="description">
                    I’m Gustavo Serpeloni a <strong>Software Developer</strong>,
                    that loves nature, adventure, technology and
                    passionate to innovation and creativity thinking.
                  </div>
              </div>
          </div>
          <Social/>
      </QuemSouEuDiv>
  );
};

export default QuemSouEu;
