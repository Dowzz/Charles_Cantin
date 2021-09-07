import React, {useState} from 'react'
import BtnSlider from './BtnSlider'
import {photoData} from '../../data/photoData'

export default function Slider() {
  
    
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== photoData.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === photoData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(photoData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <div className="container-slider">
            {photoData.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        className="image"
                        src={obj.source}
                        alt="" 
                        />
                        <div className="overlay">
                            <div className="text">{obj.name}</div>
                        </div>
                    </div>
                    
                )

            })}
         
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>


            <div className="container-dots">
                {Array.from({length:(photoData.length)
                }).map((item, index) => (
                    <div 
                    key={Math.random()}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
