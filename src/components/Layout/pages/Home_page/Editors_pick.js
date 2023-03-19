import { sort } from "../../../../utilities/sort";
import { editorsPickSlides } from "../../../../various_things/slides";
import { cardTypes, DO_NOT_SORT, SORT_BY_COUNTRY, SORT_BY_NAME, SORT_BY_TITLE } from "../../../../various_things/constants";

import { useState } from "react";

import Card from "../../../Card/Card";
import Container from "../../../Container";
import Slide from "../../../Slider/Slide";
import SliderNavigation from "../../../Slider/Slider_navigation";
import SortBy from "../../../SortBy";

function EditorsPick () {
    const sortCriterias = [ DO_NOT_SORT, SORT_BY_TITLE, SORT_BY_COUNTRY ];
    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);
    const [ sortCriteria, setSortCriteria ] = useState(sortCriterias[0]);

    console.log(editorsPickSlides)

    function handleSortCriteriaChange ({ criteria }) {
        setSortCriteria(criteria);
    }

    function handleSlideChange ({ nextSlideIndex }) {
        setCurrentSlideIndex(nextSlideIndex);
    }

    return (
        <section className="editors-pick">
            <Container classNames={[ "editors-pick__text" ]}>
                <h2>Editor's Pick</h2>
                <p className="text text-small text-bold">Our picks, just for you nam an vidisse admodum omittantur nihli corrumpit</p>
            </Container>

            <Container classNames={[ "editors-pick__slide-container" ]} >
                <SliderNavigation 
                    currentSlideIndex={ currentSlideIndex } 
                    totalSlidesCount={ editorsPickSlides.length }
                    lastSlideIndex={ editorsPickSlides.length - 1 } 
                    handleSlideChange={ handleSlideChange }
                />
                <SortBy
                    currentCriteria={ sortCriteria }
                    sortCriterias={ sortCriterias }
                    handleSortCriteriaChange={ handleSortCriteriaChange }
                />

                <Slide>
                    <Container classNames={[ "editors-pick__slide__inner" ]}>
                        {
                            sort(editorsPickSlides[currentSlideIndex].cards, sortCriteria)
                            .map((card) => 
                                <Card card={ card } classNames={[ cardTypes.textInner ]} key={ `${ card.title }_${ card.text }` } />
                            )
                        }
                    </Container>
                </Slide>
            </Container>
        </section>
    );
}

export default EditorsPick;