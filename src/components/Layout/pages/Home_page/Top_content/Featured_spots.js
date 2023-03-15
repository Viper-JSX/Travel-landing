import { useState } from "react";
import { featuresSpotsCards } from "../../../../../various_things/cards";
import { cardTypes } from "../../../../../various_things/constants";
import Card from "../../../../Card/Card";

import Container from "../../../../Container";
import SlideIndicator from "../../../../Slider/Slide_indicator";

function FeaturedSpots ({ currentSlideIndex, totalSlidesCount }) {
    const [ allPlacesShowed, setAllPlacesShowed ] = useState(false);

    function handleShowAllPlaces () {
        setAllPlacesShowed(true);
    }

    return (
        <section className="featured-spots">

            <Container classNames={[ "featured-spots__cards-container" ]}>
                <div className="text-with-title features-spots__text">
                    <h2 className="title">Featured Spots</h2>
                    <p className="text text-small text-bold">Some of the featured spots that you will might want to visit before you die</p>
                    <b onClick={ handleShowAllPlaces }>--- View all</b>
                </div>
                <Container classNames={[ "featured-spots__cards" ]}>

                    {
                        featuresSpotsCards.slice(0, allPlacesShowed ? featuresSpotsCards.length : 3).map((card) => 
                        <Card 
                            card={card} 
                            classNames={[ cardTypes.textOuter ]}
                            key={ card.text } 
                            />
                        )
                    }
                </Container>
            </Container>

            <SlideIndicator
                currentSlideIndex={ currentSlideIndex }
                totalSlidesCount={ totalSlidesCount }
            />
        </section>
    );
}

export default FeaturedSpots;