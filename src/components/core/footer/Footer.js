import React from 'react'
import FooterArea from './FooterArea'
import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <>
            {/* Footer Start*/}
            <footer>
                <div
                    className="footer-main"
                    data-background="{% static 'img/shape/footer_bg.png' %}"
                >
                    <FooterArea />
                    <FooterBottom />
                </div>
            </footer>
        </>

    )
}

export default Footer