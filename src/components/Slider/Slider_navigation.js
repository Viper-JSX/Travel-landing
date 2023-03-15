import SlideIndicator from "./Slide_indicator";

function SliderNavigation ({ currentSlideIndex, lastSlideIndex, totalSlidesCount, handleSlideChange }) {
    function handleNextSlide () {
        let nextIndex = currentSlideIndex;
        nextIndex++;

        if (nextIndex > lastSlideIndex) {
            nextIndex = 0;
        }

        console.log(nextIndex, "/", totalSlidesCount - 1);
        handleSlideChange({ nextSlideIndex: nextIndex });
    }

    function handlePrevSlide () {
        let nextIndex = currentSlideIndex;
        nextIndex--;

        if (nextIndex < 0) {
            nextIndex = lastSlideIndex;
        }
        
        console.log(nextIndex, "/", totalSlidesCount - 1);
        handleSlideChange({ nextSlideIndex: nextIndex }); 
    }
    
    return (
        <div className="slider__navigation">   
            <button className="arrow-prev" onClick={ handlePrevSlide } >{ "<" }</button>
            <button className="arrow-next" onClick={ handleNextSlide } >{ ">" }</button>
        </div>
    );
}

export default SliderNavigation;