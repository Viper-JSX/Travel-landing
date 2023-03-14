import Container from "../../../Container";
import Slider from "../../../Slider/Slider";

function Intro () {
    return (
        <section className="intro">
            <Container classNames={[ "intro__inner" ]}>
                <Slider slides={ [] } />
            </Container>
        </section>
    );
}

export default Intro;