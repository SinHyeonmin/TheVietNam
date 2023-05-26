import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/mainpage';
import Customer from './Customer';
import Consulting from './Consulting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exeat path='/' element={<Home />} />
        <Route path='/main' element={<Mainpage />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/consulting' element={<Consulting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
