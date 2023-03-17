import { useEffect, useState } from "react";

import { introSlides } from "../../../../../various_things/slides";

import Container from "../../../../Container";
import Slide from "../../../../Slider/Slide";
import ReadMore from "../../../../Read_more";
import SliderNavigation from "../../../../Slider/Slider_navigation";
import SlideIndicator from "../../../../Slider/Slide_indicator";
import UserInfo from "../../../../Header/User_info";

function Intro ({ currentSlideIndex, handleSlideChange }) {
    const [ currentSlide, setCurrentSlide ] = useState(null);

    useEffect(() => {
        setCurrentSlide(introSlides[currentSlideIndex]);
    }, [currentSlideIndex]);

    return (
        <section className="intro">
            <Container classNames={[ "intro__inner" ]}>
                <UserInfo />
                <Slide classNames={[ "intro__slide" ]}>
                    <h2 className="slide__title">{ currentSlide?.title }</h2>
                    <p className="slide__text">{ currentSlide?.text }</p>
                    <img className="slide__image" src={ currentSlide?.imgUrl } alt="Slide image" />
                    {
                        currentSlide?.readMore ?
                        <ReadMore to={ currentSlide.readMore } />
                        :
                        null    
                    }

                    <Container classNames={[ "slider-navigation-wrapper" ]}>
                        <SliderNavigation 
                            lastSlideIndex = { introSlides.length - 1 }
                            currentSlideIndex={ currentSlideIndex }
                            totalSlidesCount={ introSlides.length }
                            handleSlideChange={ handleSlideChange }
                        />
                        <SlideIndicator 
                            currentSlideIndex={ currentSlideIndex }
                            totalSlidesCount={ introSlides.length }
                        />
                    </Container>
                </Slide>
            </Container>
        </section>
    );
}

export default Intro;