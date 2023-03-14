import { Link } from "react-router-dom";

function Slide ({ slide={} }) {
    return (
        <div className="slide">
            <h2 className="slide__title">{ slide.title }</h2>
            <p className="slide__text">{ slide.text }</p>
            <img className="slide__image" src={ slide.imgUrl } alt="Slide image" />
            {
                slide.readMore ?
                <Link to={ slide.readMore } target="_blank">
                    <button>Read more</button>
                </Link>
                :
                null    
            }
        </div>
    );
}

export default Slide;