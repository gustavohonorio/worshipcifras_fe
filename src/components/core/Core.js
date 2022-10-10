import React from 'react'

// components
import PreLoader from './preloader/PreLoader'
import Navbar from './navbar/Navbar';
import BuscarCifra from './buscar_cifra/BuscarCifra';
import BannerDestaque from './banner_destaque/BannerDestaque';
import Slider from './slider/Slider';
import Ranking from './ranking/Ranking';
import Feedback from './feedback/Feedback';
import Footer from './footer/Footer';
import CardDestaque from './card_destaque/CardDestaque';

const Core = () => {
    return (
        <>
            {/* <PreLoader /> */}
            <Navbar />
            <BuscarCifra />
            <main>
                <CardDestaque />
                <Slider />
                <Ranking />
                <Feedback />
            </main>
            <Footer />
        </>
    )
}

export default Core