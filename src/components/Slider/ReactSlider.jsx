import React from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import './ReactSlider.css'
import pen from '../../media/ручка.svg'

const ReactCardSlider = (props) => {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return (
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
                {
                    props.slides.map((slide, index) => {
                        return (
                            <div className="slider-card" key={index} onClick={() => slide.clickEvent()}>
                                <div className="parent">
                                    {/*<img src={img}/>*/}
                                    <div className="group">
                                        <img className="vector" src={slide.image}/>
                                        <div className="pen">
                                            <p className="userName">{slide.user}</p>
                                            <img src={pen}/>
                                        </div>
                                        <p className="text">{slide.comment}</p>
                                        <p className="date">{slide.date}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}
export default ReactCardSlider;