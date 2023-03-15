function Card ({ card={} }) {
    return (
        <div className="card">
            <img src={ card.imgUrl } alt="Card image" />
            <h2 className="card__title">{ card.title }</h2>
            <p className="card__text" >{ card.text }</p>
        </div>
    );
}

export default Card;