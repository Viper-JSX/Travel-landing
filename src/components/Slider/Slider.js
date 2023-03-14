import { useEffect, useState } from "react";
import Slide from "./Slide";
import SliderNavigation from "./Slider_navigation";

function Slider ({ slides=[] }) {
    const [ currentSlide, setCurrentSlide ] = useState(null);

    useEffect(() => setCurrentSlide({ text: "Slide1" }), []);

    return (
        <div className="slider">
            <h2>A slider</h2>
            <Slide slide={ currentSlide } />
            <SliderNavigation>
                Outdors edition
            </SliderNavigation>
        </div>
    );  
}

export default Slider;