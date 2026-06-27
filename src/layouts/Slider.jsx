
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { Btn_cta } from '../components/Buttons';
import '../styles/slider.css'


function Slider() {
    return (
        <div className='slider_container'>
            <Carousel data-bs-theme="dark" className='h-100'>
                <Carousel.Item className=''>
                    <img
                        className="d-block w-100"
                        src="../../img/image-01.jpg"
                        alt="First slide"
                    />
                    <div className='layer_img'></div>
                    <Carousel.Caption>
                        <div className='text_slider_box'>
                            <div className="text_slider_card">
                                <div className="card_title_slider">
                                    <h2>NAIL FASHION</h2>
                                </div>
                                <div className='card_subtitle_slider'>
                                    <p>Salonx es el salón de uñas más popular, limpio y recomendado.</p>
                                </div>
                                <div className='mt-4'>
                                    <Btn_cta content={'Ver mas'}/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../img/image-06.jpg"
                        alt="Second slide"
                    />
                    <div className='layer_img'></div>
                    <Carousel.Caption>
                        <div className='text_slider_box'>
                            <div className="text_slider_card">
                                <div className="card_title_slider">
                                    <h2>NAIL CARE</h2>
                                </div>
                                <div className='card_subtitle_slider'>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                                <div className='mt-4'>
                                    <Btn_cta content={'Ver mas'}/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../img/image-07.jpg"
                        alt="Third slide"
                    />
                    <div className='layer_img'></div>
                    <Carousel.Caption>
                        <div className='text_slider_box'>
                            <div className='text_slider_card'>
                                <div className="card_title_slider">
                                    <h2>ART MANICURE</h2>
                                </div>
                                <div className="card_subtitle_slider">
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                                <div className='mt-4'>
                                    <Btn_cta content={'Ver mas'}/>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider