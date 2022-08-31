// styles
import './App.css';
import './assets/css/bootstrap.min.css'
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

// components
import PreLoader from './components/core/preloader/PreLoader'
import Navbar from './components/core/navbar/Navbar';
import BuscarCifra from './components/core/buscar_cifra/BuscarCifra';
import BannerDestaque from './components/core/banner_destaque/BannerDestaque';
import Slider from './components/core/slider/Slider';

function App() {
  return (
    <>
      {/* <PreLoader /> */}
      <Navbar />
      <BuscarCifra />
      <BannerDestaque />
      <Slider />
    </>
  );
}

export default App;
