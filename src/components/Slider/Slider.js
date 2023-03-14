import { useEffect, useState } from "react";
import Slide from "./Slide";
import SliderNavigation from "./Slider_navigation";

function Slider ({ slides=[] }) {
    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

    function handleNextSlide () {
        console.log("Next");
    }

    function handlePrevSlide () {
        console.log("Prev");
    }

    return (
        <div className="slider">
            <h2>A slider</h2>
            <Slide slide={ slides[currentSlideIndex] } />
            <SliderNavigation
                currentSlide={ currentSlideIndex }
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