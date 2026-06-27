import React from 'react'
import Header from '../layouts/Header'
import Slider from '../layouts/Slider'
import About from '../layouts/About'
import Services from '../layouts/Services'
import ShopPreview from '../layouts/ShopPreview'
import Coments from '../layouts/Coments'
import Contact from '../layouts/Contact'
import Footer from '../layouts/Footer'

function MainPage() {
    return (
        <>
            <main className='main_container'>
                <section>
                    <Slider />
                </section>
                <section id='about-section' className='margin_side'>
                    <About />
                </section>
                <section id='service-section'>
                    <Services />
                </section>
                <section>
                    <ShopPreview />
                </section>
                <section>
                    <Coments />
                </section>
                <section id='contact-section'>
                    <Contact />
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default MainPage