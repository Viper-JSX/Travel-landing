import { Link } from "react-router-dom";
import { TEXT } from "../../various_things/constants";
import ReadMore from "../Read_more";

function Card ({ card={}, classNames=[] }) {
    return (
        <div className={`card ${classNames.join(" ")}`}>
            <img src={ card.imgUrl } alt="Card image" />
            <h2 className="card__title">{ card.title }</h2>
            {
                card.country ? 
                <b className="contry-text">{card.country}</b>
                :
                null                
            }
            <p className="card__text text text-small text-bold" >{ card.text }</p>

            {
                card.readMore ? 
                <ReadMore to={card.readMore} type={ TEXT } />
                :
                null
            }
        </div>
    );
}

export default Card;