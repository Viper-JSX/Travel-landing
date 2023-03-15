import { featuresSportsCards } from "../../../../../various_things/cards";
import Card from "../../../../Card/Card";

import Container from "../../../../Container";
import SlideIndicator from "../../../../Slider/Slide_indicator";

function FeaturedSports ({ currentSlideIndex, totalSlidesCount }) {
    return (
        <section className="featured-sports">
            <Container classNames={[ "featured-sports__cards" ]}>
                {
                    featuresSportsCards.map((card) => <Card card={card} key={ card.text } />)
                }
            </Container>

            <SlideIndicator
                currentSlideIndex={ currentSlideIndex }
                totalSlidesCount={ totalSlidesCount }
            />
        </section>
    );
}

export default FeaturedSports;