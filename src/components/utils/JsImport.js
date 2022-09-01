import React from 'react'

import { Helmet } from "react-helmet";

const JsImport = () => {
  return (
    <Helmet>
        {/* USANDO ESTA LIB HELMET PARA IMPORTAR OS JS INTERNOS DO APP */}
        
        {/* All JS Custom Plugins Link Here */}
        <script src="./assets/js/vendor/modernizr-3.5.0.min.js"></script>
        {/* Jquery, Popper, Bootstrap */}
        <script src="./assets/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="./assets/js/popper.min.js"></script>
        <script src="./assets/js/bootstrap.min.js"></script>
        {/* Jquery Mobile Menu */}
        <script src="./assets/js/jquery.slicknav.min.js"></script>

        {/* Jquery Slick , Owl-Carousel Plugins */}
        <script src="./assets/js/owl.carousel.min.js"></script>
        <script src="./assets/js/slick.min.js"></script>
        {/* Date Picker */}
        <script src="./assets/js/gijgo.min.js"></script>
        {/* One Page, Animated-HeadLin */}
        <script src="./assets/js/wow.min.js"></script>
        <script src="./assets/js/animated.headline.js"></script>
        <script src="./assets/js/jquery.magnific-popup.js"></script>

        {/* Scrollup, nice-select, sticky */}
        <script src="./assets/js/jquery.scrollUp.min.js"></script>
        <script src="./assets/js/jquery.nice-select.min.js"></script>
        <script src="./assets/js/jquery.sticky.js"></script>

        {/* contact js */}
        <script src="./assets/js/contact.js"></script>
        <script src="./assets/js/jquery.form.js"></script>
        <script src="./assets/js/jquery.validate.min.js"></script>
        <script src="./assets/js/mail-script.js"></script>
        <script src="./assets/js/jquery.ajaxchimp.min.js"></script>

        {/* Jquery Plugins, main Jquery */}
        <script src="./assets/js/plugins.js"></script>
        <script src="./assets/js/main.js"></script>

        {/* Jquery Mask - Igor Escobar*/}
        <script src="./assets/js/jquery.mask.min.js"></script>

        {/* Mascaras para os formularios */}
        <script src="./assets/js/mascaras-usuario.js"></script>

        {/* Jquery + AJAX Busca com autocomplete */}
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
      </Helmet>
  )
}

export default JsImport