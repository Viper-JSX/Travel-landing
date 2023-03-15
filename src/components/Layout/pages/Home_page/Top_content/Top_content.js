import { useState } from "react";

import { introSlides } from "../../../../../various_things/slides";

import Container from "../../../../Container";
import FeaturedSpots from "./Featured_spots";
import Intro from "./Intro";

function TopContent () {
    const [ currentSlide, setCurrentSlide ] = useState(null);
    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

    function handleSlideChange ({ nextSlideIndex }) {
        setCurrentSlide(introSlides[nextSlideIndex]);
        setCurrentSlideIndex(nextSlideIndex);
    }

    return (
        <Container classNames={[ "top-content" ]}>
            <Intro 
                currentSlideIndex={ currentSlideIndex }
                handleSlideChange={ handleSlideChange }
            />

            <FeaturedSpots 
                currentSlideIndex={ currentSlideIndex }
                totalSlidesCount={ introSlides.length }
            />
        </Container>
    );
}

export default TopContent;