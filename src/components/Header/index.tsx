
import { Navbar } from './style.js';

const Header: React.FC = () => {

  return (
    <Navbar>
      <div className="logo">
        <h2>Gustavo Serpeloni</h2>
      </div>
      <div className="menu">
        <div> About </div>
        <div>  Projects </div>
      </div>
    </Navbar>
  );
}

export default Header;
