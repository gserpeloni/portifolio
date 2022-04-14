
import { NavbarDiv } from './style.js';

const Navbar: React.FC = () => {

  return (
    <NavbarDiv>
      <div className="logo">
        <h2>Gustavo Serpeloni</h2>
      </div>
      <div className="menu">
        <div> About </div>
        <div>  Projects </div>
      </div>
    </NavbarDiv>
  );
}

export default Navbar;
