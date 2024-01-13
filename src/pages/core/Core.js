import React from 'react'

// components
//import PreLoader from '../../components/core/preloader/PreLoader'
import Navbar from '../../components/core/navbar/Navbar';
import BuscarCifra from '../../components/core/buscar_cifra/BuscarCifra';
import Ranking from '../../components/core/ranking/Ranking';
import Footer from '../../components/core/footer/Footer';
import CardDestaque from '../../components/core/card_destaque/CardDestaque';
import BottomMenu from '../../components/core/navbar/BottomMenu';

const Core = () => {
    return (
        <>
            {/* <PreLoader /> */}
            <Navbar />
            <BuscarCifra />
            <main>
                <CardDestaque />
                <Ranking />
            </main>
            <Footer />
            <BottomMenu />
        </>
    )
}

export default Core