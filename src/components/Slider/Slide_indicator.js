function SlideIndicator ({ currentSlideIndex, totalSlidesCount }) {
    return (
        <div className="slide-indicator">
            {currentSlideIndex + 1} / {totalSlidesCount}
        </div>
    );
}

export default SlideIndicator;