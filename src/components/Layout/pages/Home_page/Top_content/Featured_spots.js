import { useState } from "react";
import { featuresSpotsCards } from "../../../../../various_things/cards";
import { cardTypes } from "../../../../../various_things/constants";
import Card from "../../../../Card/Card";

import Container from "../../../../Container";
import SlideIndicator from "../../../../Slider/Slide_indicator";

function FeaturedSpots ({ currentSlideIndex, totalSlidesCount }) {
    const [ allPlacesShowed, setAllPlacesShowed ] = useState(false);

    function handleAllPlacesToggle () {
        setAllPlacesShowed(!allPlacesShowed);
    }

    return (
        <section className="featured-spots">
                <Container classNames={[ "text-with-title", "featured-spots__text"]}>
                    <h2 className="title">Featured Spots</h2>
                    <p className="text text-small text-bold">Some of the featured spots that you will might want to visit before you die</p>
                    

                    <b className="view-all" onClick={ handleAllPlacesToggle }>
                        <hr />
                        {
                            allPlacesShowed ? 
                            "Hide"
                            :
                            "View all"
                        }
                    </b>   
                </Container>

            <Container classNames={[ "featured-spots__inner" ]}>
                <Container classNames={[ "cards-container", "featured-spots__cards" ]}>
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
                
                <Container classNames={[ "featured-spots__slide-indicator-container slide-indicator-container" ]}>
                    <span>Outdors edition</span>
                    <SlideIndicator
                        currentSlideIndex={ currentSlideIndex }
                        totalSlidesCount={ totalSlidesCount }
                    />
                </Container>
            </Container>

            {/* <Container classNames={[ "featured-spots__cards-container" ]}>
            </Container> */}

        </section>
    );
}

export default FeaturedSpots;