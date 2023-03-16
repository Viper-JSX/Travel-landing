import { useState } from "react";
import { cardTypes } from "../../../../various_things/constants";

import { editorsPickSlides } from "../../../../various_things/slides";
import Card from "../../../Card/Card";

import Container from "../../../Container";
import Slide from "../../../Slider/Slide";
import SliderNavigation from "../../../Slider/Slider_navigation";

function EditorsPick () {
    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

    function handleSlideChange ({ nextSlideIndex }) {
        console.log("change", nextSlideIndex)
        setCurrentSlideIndex(nextSlideIndex);
    }

    return (
        <section className="editors-pick">
            <Container classNames={[ "editors-pick__text" ]}>
                <h2>Editor's Pick</h2>
                <p className="text text-small text-bold">Our picks, just for you nam an vidisse admodum omittantur nihli corrumpit</p>
            </Container>

            <Container classNames={[ "editor-pick__slide-container" ]} >
                <SliderNavigation 
                    currentSlideIndex={ currentSlideIndex } 
                    totalSlidesCount={ editorsPickSlides.length }
                    lastSlideIndex={ editorsPickSlides.length - 1 } 
                    handleSlideChange={ handleSlideChange }
                />
                <Slide>
                    <Container classNames={[ "editors-pick__slide__inner" ]}>
                        {
                            editorsPickSlides[currentSlideIndex].cards.map((card) => 
                                <Card card={ card } classNames={[ cardTypes.textInner ]} />
                            )
                        }
                    </Container>
                </Slide>
            </Container>
        </section>
    );
}

export default EditorsPick;