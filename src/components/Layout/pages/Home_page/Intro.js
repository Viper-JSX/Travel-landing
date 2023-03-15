import { introSlides } from "../../../../various_things/slides";
import Container from "../../../Container";
import Slide from "../../../Slider/Slide";
import Slider from "../../../Slider/Slider";
import { useEffect, useState } from "react";
import ReadMoreButton from "../../../Read_more_button";

function Intro ({ currentSlideIndex, handleSlideChange }) {
    const [ currentSlide, setCurrentSlide ] = useState(null);

    console.log(handleSlideChange)

    useEffect(() => {
        setCurrentSlide(introSlides[currentSlideIndex]);
    }, [currentSlideIndex]);

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
                <ReadMoreButton to={ currentSlide.readMore } />
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