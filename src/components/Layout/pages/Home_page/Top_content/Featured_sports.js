import Container from "../../../../Container";
import SlideIndicator from "../../../../Slider/Slide_indicator";

function FeaturedSports ({ currentSlideIndex, totalSlidesCount }) {
    return (
        <section className="featured-sports">
            <Container classNames={[ "featured-sports__cards" ]}>
                card1
                card2
                card3
            </Container>

            <SlideIndicator
                currentSlideIndex={ currentSlideIndex }
                totalSlidesCount={ totalSlidesCount }
            />
        </section>
    );
}

export default FeaturedSports;