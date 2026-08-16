import React from 'react'

import '../styles/about.css'

function About() {

    return (
        <section id='about-section' className='margin_side'>
            <div className='about_container'>
                <div className='about_box'>
                    <div className='about_img_box'>
                        <img src="../../img/image-02.jpg" alt="" />
                    </div>
                    <div className='about_text_box'>
                        <div>
                            <div className='head_text'>
                                <div>
                                    <h2>Sobre nosotros</h2>
                                </div>
                                <h3>Estudio creativo de manicura y pedicura con servicios magistrales para la belleza de tus uñas.</h3>
                            </div>
                            <div className='body_text'>
                                <p>
                                    En Salonx, nos enorgullecemos de la calidad del trabajo de nuestras manicuristas. Ofrecemos a nuestros clientes el máximo profesionalismo e higiene, brindando los mejores servicios a precios razonables.
                                </p>
                                <p>
                                    Podemos garantizarle que los servicios que reciba en Salonx utilizan las últimas tecnologías y tendencias en la industria de las uñas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About