import React from "react";
import ComentCard from "../components/ComentCard";
import '../styles/sliderComents.css'

function Comentsx() {
    return (
        <section>
            <div className="box_slider_coments">
                <div className='coments_header'>
                    <div className='title_one'>
                        <h2>Testimonios</h2>
                    </div>
                    <div className='title_two'>
                        <span>Lo que nuestras clientes están diciendo de nosotros</span>
                    </div>
                </div>
                <div className="slider">
                    <input
                        type="radio"
                        name="slider_btn"
                        value="slide1"
                        defaultChecked={true}
                        className="slider__nav"
                    />
                    <input type="radio" name="slider_btn" value="slide2" className="slider__nav" />
                    <input type="radio" name="slider_btn" value="slide3" className="slider__nav" />
                    <input type="radio" name="slider_btn" value="slide4" className="slider__nav" />
                    <div className="slider__inner">
                        <div className="slider__contents">
                            <ComentCard
                                name={'Jose Ramirez'}
                                img={'../../img/image-004.jpg'}
                                coment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae'}
                            />
                        </div>
                        <div className="slider__contents">
                            <ComentCard
                                name={'Jose Ramirez'}
                                img={'../../img/image-004.jpg'}
                                coment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae'}
                            />
                        </div>
                        <div className="slider__contents">
                            <ComentCard
                                name={'Jose Ramirez'}
                                img={'../../img/image-004.jpg'}
                                coment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae'}
                            />
                        </div>
                        <div className="slider__contents">
                            <ComentCard
                                name={'Jose Ramirez'}
                                img={'../../img/image-004.jpg'}
                                coment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comentsx;
