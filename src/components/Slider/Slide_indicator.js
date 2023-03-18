function SlideIndicator ({ currentSlideIndex, totalSlidesCount }) {
    return (
        <div className="slide-indicator">
            <hr />
            {currentSlideIndex + 1} / {totalSlidesCount}
            <hr />
        </div>
    );
}

export default SlideIndicator;