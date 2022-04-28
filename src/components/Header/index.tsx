import Social from "../Social";
import { HeaderDiv } from "./style";
import frontImage from '../../assets/wallpaper_me.svg'

const Header: React.FC = () => {
  const image = "https://avatars.githubusercontent.com/u/30409723?v=4";

  return (
    <HeaderDiv>
      <div className="imageDiv">
        <img src={frontImage} />
      </div>
      <div className="descriptionDiv">
        <div className="title">
          Gustavo Serpeloni  🌱
        </div>
        <div className="description">
          I am a <strong> Fullstack Software Developer</strong>,
          that loves nature, adventure, technology and
          passionate to innovation and creative contents.
        </div>
        <Social />
      </div>
    </HeaderDiv >
  );
};

export default Header;

{/* <div className="imageDiv">
<img src={image} />
</div>

<div className="descriptionDiv">

<div className="description">

</div>
</div> */}