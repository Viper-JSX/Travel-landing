function SliderNavigation ({ children }) {
    return (
        <div className="slider__navigation">   
            <button className="arrow-prev">{ "<" }</button>
            <button className="arrow-next" >{ ">" }</button>
            { children }
        </div>
    );
}

export default SliderNavigation;