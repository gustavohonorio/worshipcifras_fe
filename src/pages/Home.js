import React from 'react'

// components
import Navbar from '../components/core/navbar/Navbar';
import Ranking from '../components/core/ranking/Ranking';
import Footer from '../components/core/footer/Footer';
import CardDestaque from '../components/core/card_destaque/CardDestaque';
import BottomMenu from '../components/core/navbar/BottomMenu';
import JsImport from '../components/utils/JsImport';

const Core = () => {
    return (
        <>
            <Navbar />
            <main>
                <CardDestaque />
                <Ranking />
            </main>
            <Footer />
            <BottomMenu />

            {/* JS */}
            <JsImport />
        </>
    )
}

export default Core