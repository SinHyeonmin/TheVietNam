import './topnav.css';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Nav({ isNavOpen, handleNavToggle }) {
  return (
    <div className='nav_overlay'>
      <div className='nav_box'>
        <div className='close_icon'>
          {isNavOpen ? (
            <AiOutlineClose size='36px' onClick={handleNavToggle} />
          ) : null}
        </div>
        <ul>
          <Link className='link_line' to='/main'>
            <li>더빛남</li>
          </Link>
          <Link className='link_line' to='/business'>
            <li>창업안내</li>
          </Link>
          <Link className='link_line' to='/customer'>
            <li>고객장소</li>
          </Link>
          <Link
            className='link_line'
            to='https://www.instagram.com/the_viet_nam_/'
          >
            <li className='nav_instagram'>
              <BsInstagram />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
