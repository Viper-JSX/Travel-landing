import { useEffect, useState } from "react";
import Slide from "./Slide";
import SliderNavigation from "./Slider_navigation";

function Slider ({ slides=[] }) {
    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

    function handleNextSlide () {
        let nextIndex = currentSlideIndex;
        nextIndex++;

        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }

        setCurrentSlideIndex(nextIndex);
    }

    function handlePrevSlide () {
        let nextIndex = currentSlideIndex;
        nextIndex--;

        if (nextIndex < 0) {
            nextIndex = slides.length - 1;
        }
        
        setCurrentSlideIndex(nextIndex); 
    }

    return (
        <div className="slider">
            <h2>A slider</h2>
            <Slide slide={ slides[currentSlideIndex] } />
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