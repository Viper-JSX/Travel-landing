import { introSlides } from "../../../../various_things/slides";
import Container from "../../../Container";
import Slider from "../../../Slider/Slider";

function Intro () {
    return (
        <section className="intro">
            <Container classNames={[ "intro__inner" ]}>
                <Slider slides={ introSlides } />
            </Container>
        </section>
    );
}

export default Intro;