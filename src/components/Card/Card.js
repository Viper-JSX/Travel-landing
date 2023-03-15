function Card ({ card={}, classNames=[] }) {
    return (
        <div className={`card ${classNames.join(" ")}`}>
            <img src={ card.imgUrl } alt="Card image" />
            <h2 className="card__title">{ card.title }</h2>
            <p className="card__text" >{ card.text }</p>
        </div>
    );
}

export default Card;