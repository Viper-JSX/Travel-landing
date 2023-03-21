function SlideIndicator ({ currentSlideIndex, totalSlidesCount }) {
    return (
        <div className="slide-indicator">
            <hr />
            <span className="count" >{ currentSlideIndex + 1} / {totalSlidesCount }</span>
            <hr />
        </div>
    );
}

export default SlideIndicator;