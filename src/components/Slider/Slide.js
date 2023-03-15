import { Link } from "react-router-dom";

function Slide ({ slide={}, children }) {
    return (
        <div className="slide">
            { children }
        </div>
    );
}

export default Slide;