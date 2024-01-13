import React from 'react'
import TopCifras from './TopCifras'
import TopArtistas from './TopArtistas'

const Ranking = () => {
    return (
        <>
            <section
                className="blog_area single-post-area section-padding"
            >
                <div className="container">
                    <div className="row">
                        <TopCifras />
                        <TopArtistas />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Ranking