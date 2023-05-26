import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Mainpage from './pages/mainpage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/mainpage" element={<Mainpage></Mainpage>} />
      </Routes>
    </Router>
  );
}

export default App;
