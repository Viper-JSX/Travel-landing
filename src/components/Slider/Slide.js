function Slide ({ slide={}, classNames=[], children }) {
    return (
        <div className={ `slide ${ classNames.join(" ") }` }>
            { children }
        </div>
    );
}

export default Slide;