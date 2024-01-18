// styles
import './App.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/flaticon.css'
import './assets/css/slicknav.css'
import './assets/css/animate.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/fontawesome-all.min.css'
import './assets/css/themify-icons.css'
import './assets/css/slick.css'
import './assets/css/nice-select.css'
import './assets/css/style.css'

// pages
import Home from './pages/Home';
import Search from './pages/Search';

// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
