function Slide ({ slide={} }) {
    return (
        <div className="slide">
            Slide: { slide?.text }
        </div>
    );
}

export default Slide;