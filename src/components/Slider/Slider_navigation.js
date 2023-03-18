import SlideIndicator from "./Slide_indicator";

function SliderNavigation ({ currentSlideIndex, lastSlideIndex, totalSlidesCount, handleSlideChange }) {
    function handleNextSlide () {
        let nextIndex = currentSlideIndex;
        nextIndex++;

        if (nextIndex > lastSlideIndex) {
            nextIndex = 0;
        }

        handleSlideChange({ nextSlideIndex: nextIndex });
    }

    function handlePrevSlide () {
        let nextIndex = currentSlideIndex;
        nextIndex--;

        if (nextIndex < 0) {
            nextIndex = lastSlideIndex;
        }
        
        handleSlideChange({ nextSlideIndex: nextIndex }); 
    }
    
    return (
        <div className="slider__navigation">   
            <button className="btn-prev" onClick={ handlePrevSlide } >{ "<" }</button>
            <button className="btn-next" onClick={ handleNextSlide } >{ ">" }</button>
        </div>
    );
}

export default SliderNavigation;