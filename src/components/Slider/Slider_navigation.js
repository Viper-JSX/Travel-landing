function SliderNavigation ({ children, currentSlide, totalSlidesCount, handleNextSlide, handlePrevSlide }) {
    return (
        <div className="slider__navigation">   
            <button className="arrow-prev" onClick={ handlePrevSlide } >{ "<" }</button>
            <button className="arrow-next" onClick={ handleNextSlide } >{ ">" }</button>
            { children }
            <b>{currentSlide} / { totalSlidesCount }</b>
        </div>
    );
}

export default SliderNavigation;