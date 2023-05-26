import Header from '../components/header';
import MainLogo from '../assets/mainlogo.png';
import './home.css';

function Home() {
  return (
    <div>
      <Header />
      <div className='home_box'>
        <div>
          <img src={MainLogo} alt='MainLogo' id='mainLogo'></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
