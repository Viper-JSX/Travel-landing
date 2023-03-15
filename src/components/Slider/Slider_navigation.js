import SlideIndicator from "./Slide_indicator";

function SliderNavigation ({ children, currentSlide, totalSlidesCount, handleNextSlide, handlePrevSlide }) {
    return (
        <div className="slider__navigation">   
            <button className="arrow-prev" onClick={ handlePrevSlide } >{ "<" }</button>
            <button className="arrow-next" onClick={ handleNextSlide } >{ ">" }</button>
        </div>
    );
}

export default SliderNavigation;