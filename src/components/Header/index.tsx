import Social from "../Social";
import { HeaderDiv } from "./style.js";

const Header: React.FC = () => {
  const image = "https://avatars.githubusercontent.com/u/30409723?v=4";

  return (
    <HeaderDiv>

      <div className="imageDiv">
        <img src={image} />
      </div>

      <div className="descriptionDiv">
        <h1> Welcome to my portifolio, </h1>
        <div className="description">
          I’m Gustavo Serpeloni a <strong>Software Developer</strong>,
          that loves nature, adventure, technology and
          passionate to innovation and creativity thinking.
        </div>
      </div>
    </HeaderDiv >
  );
};

export default Header;
