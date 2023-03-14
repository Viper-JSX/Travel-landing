import Container from "../../../../Container";
import Intro from "../Intro";

function TopContent () {
    const [ currentSlide, setCurrentSlide ] = useState(introSlides[0]);
    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

    function handleSlideChange ({ nextSlideIndex }) {
        setCurrentSlide(introSlides[nextSlideIndex]);
        setCurrentSlideIndex(nextSlideIndex);
    }

    return (
        <Container classNames={[ "top-content" ]}>
            <Intro 
                currentSlide={ currentSlide } 
                currentSlideIndex={ currentSlideIndex }
                handleSlideChange={ handleSlideChange }
            />
        </Container>
    );
}