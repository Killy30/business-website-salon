import React from 'react'
import Header from '../layouts/Header'
import Slider from '../layouts/Slider'
import About from '../layouts/About'
import Services from '../layouts/Services'
import ShopPreview from '../layouts/ShopPreview'
import Coments from '../layouts/Coments'
import Contact from '../layouts/Contact'
import Footer from '../layouts/Footer'
import Comentsx from '../layouts/Comentsx'
import ApptAd from '../layouts/ApptAd'


function MainPage() {
    return (
        <>
            <main className='main_container'>
                <Slider />
                <About />
                <Services />
                <ShopPreview />
                <ApptAd />
                <Comentsx />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default MainPage