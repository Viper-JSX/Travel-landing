import { useEffect, useState } from "react";
import Slide from "./Slide";
import SliderNavigation from "./Slider_navigation";

function Slider ({ slides=[], currentSlideIndex, lastSlideIndex, handleSlideChange }) {

    function handleNextSlide () {
        let nextIndex = currentSlideIndex;
        nextIndex++;

        if (nextIndex > lastSlideIndex) {
            nextIndex = 0;
        }

        console.log(nextIndex, "/", slides.length - 1);
        handleSlideChange({ nextSlideIndex: nextIndex });
    }

    function handlePrevSlide () {
        let nextIndex = currentSlideIndex;
        nextIndex--;

        if (nextIndex < 0) {
            nextIndex = lastSlideIndex;
        }
        
        console.log(nextIndex, "/", slides.length - 1);
        handleSlideChange({ nextSlideIndex: nextIndex }); 
    }

    return (
        <div className="slider">
            <h2>A slider</h2>
            <SliderNavigation
                currentSlide={ currentSlideIndex + 1 }
                totalSlidesCount={ lastSlideIndex + 1 }
                handleNextSlide={ handleNextSlide }
                handlePrevSlide={ handlePrevSlide }
            />
        </div>
    );  
}

export default Slider;