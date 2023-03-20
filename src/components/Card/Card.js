import { Link } from "react-router-dom";
import { TEXT } from "../../various_things/constants";
import Container from "../Container";
import ReadMore from "../Read_more";

function Card ({ card={}, classNames=[] }) {
    return (
        <div className={`card ${classNames.join(" ")}`}>
            <img src={ card.imgUrl } alt="Card image" />

            <Container classNames={[ "card__text" ]}>
                <h2 className="card__title">{ card.title }</h2>
                {
                    card.country ? 
                    <b className="country-text">{card.country}</b>
                    :
                    null                
                }
                
                {
                    Array.isArray(card.text) ? 
                    card.text.map((text) => 
                        <p className="card__text text text-small text-bold" key={ text } >{ text }</p>
                    )
                    :
                    <p className="card__text text text-small text-bold" >{ card.text }</p>
                }

                {
                    card.readMore ? 
                    <ReadMore to={card.readMore} type={ TEXT } />
                    :
                    null
                }
            </Container>
        </div>
    );
}

export default Card;