import { featuresSportsCards } from "../../../../../various_things/cards";
import Card from "../../../../Card/Card";

import Container from "../../../../Container";
import SlideIndicator from "../../../../Slider/Slide_indicator";

function FeaturedSpots ({ currentSlideIndex, totalSlidesCount }) {
    return (
        <section className="featured-sports">

            <Container classNames={[ "featured-sports__cards-container" ]}>
                <div className="features-sports__text">
                    <h2>Featured Sports</h2>
                    <p>Some of the featured spots that you will might want to visit before you die</p>
                    <b>--- View all</b>
                </div>
                <Container classNames={[ "featured-sports__cards" ]}>
                    {
                        featuresSportsCards.map((card) => 
                        <Card 
                            card={card} 
                            classNames={[ "text-outer" ]}
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