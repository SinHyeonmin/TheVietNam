import './topnav.css';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Nav({ isNavOpen, handleNavToggle }) {
  return (
    <div className="nav_overlay" >
      <div className="nav_box">
        <div className="close_icon">
          {isNavOpen ? <AiOutlineClose size="36px" onClick={handleNavToggle} /> : null}
        </div>
        <ul>
          <li>
            <Link to="/mainpage">더빛남</Link>
          </li>
          <li>창업안내</li>
          <li>고객장소</li>
          <li className="nav_instagram">
            <BsInstagram />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;