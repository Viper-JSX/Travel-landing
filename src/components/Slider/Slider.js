import { useEffect, useState } from "react";
import Slide from "./Slide";
import SliderNavigation from "./Slider_navigation";

function Slider ({ slides=[], currentSlideIndex, handleSlideChange }) {

    function handleNextSlide () {
        let nextIndex = currentSlideIndex;
        nextIndex++;

        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }

        console.log(nextIndex, "/", slides.length - 1);
        handleSlideChange({ nextSlideIndex: nextIndex });
    }

    function handlePrevSlide () {
        let nextIndex = currentSlideIndex;
        nextIndex--;

        if (nextIndex < 0) {
            nextIndex = slides.length - 1;
        }
        
        console.log(nextIndex, "/", slides.length - 1);
        handleSlideChange({ nextSlideIndex: nextIndex }); 
    }

    return (
        <div className="slider">
            <h2>A slider</h2>
            <SliderNavigation
                currentSlide={ currentSlideIndex + 1 }
                totalSlidesCount={ slides.length }
                handleNextSlide={ handleNextSlide }
                handlePrevSlide={ handlePrevSlide }
            >
                Outdors edition
            </SliderNavigation>
        </div>
    );  
}

export default Slider;