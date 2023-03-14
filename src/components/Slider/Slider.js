import { useEffect, useState } from "react";
import Slide from "./Slide";
import SliderNavigation from "./Slider_navigation";

function Slider ({ slides=[] }) {
    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

    //useEffect(() => setCurrentSlide({ text: "Slide1" }), []);

    return (
        <div className="slider">
            <h2>A slider</h2>
            <Slide slide={ slides[currentSlideIndex] } />
            <SliderNavigation>
                Outdors edition
            </SliderNavigation>
        </div>
    );  
}

export default Slider;