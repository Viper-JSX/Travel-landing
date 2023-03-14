import { introSlides } from "../../../../various_things/slides";

import { Link } from "react-router-dom";

import Container from "../../../Container";
import Slide from "../../../Slider/Slide";
import Slider from "../../../Slider/Slider";
import { useState } from "react";

function Intro () {
    const [ currentSlide, setCurrentSlide ] = useState(introSlides[0]);
    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

    function handleSlideChange ({ nextSlideIndex }) {
        setCurrentSlide(introSlides[nextSlideIndex]);
        setCurrentSlideIndex(nextSlideIndex);
        //console.log(nextSlideIndex)
    }

    return (
        <section className="intro">
            <Container classNames={[ "intro__inner" ]}>
                <Slide>
                    { currentSlideIndex }
                    <h2 className="slide__title">{ currentSlide?.title }</h2>
                    <p className="slide__text">{ currentSlide?.text }</p>
                    <img className="slide__image" src={ currentSlide?.imgUrl } alt="Slide image" />
                {
                    currentSlide?.readMore ?
                <Link to={ currentSlide?.readMore } target="_blank">
                    <button>Read more</button>
                </Link>
                :
                null    
            }
                </Slide>

                <Slider 
                    slides={ introSlides } 
                    lastSlideIndex = { introSlides.length - 1 }
                    currentSlideIndex={ currentSlideIndex }
                    handleSlideChange={ handleSlideChange }
                />
            </Container>
        </section>
    );
}

export default Intro;