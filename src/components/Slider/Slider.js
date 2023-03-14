import SliderNavigation from "./Slider_navigation";

function Slider ({ slides=[] }) {
    return (
        <div className="slider">
            <h2>A slider</h2>
            <SliderNavigation>
                Outdors edition
            </SliderNavigation>
        </div>
    );  
}

export default Slider;