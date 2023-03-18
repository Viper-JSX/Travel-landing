import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
            <button className="btn-prev" onClick={ handlePrevSlide } >
                <FontAwesomeIcon icon={ faChevronLeft } />
            </button>
            <button className="btn-next" onClick={ handleNextSlide } >
                <FontAwesomeIcon icon={ faChevronRight } />
            </button>
        </div>
    );
}

export default SliderNavigation;