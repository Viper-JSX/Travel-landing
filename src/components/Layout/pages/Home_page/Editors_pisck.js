import Container from "../../../Container";
import Slide from "../../../Slider/Slide";

function EditorsPick () {
    

    return (
        <section className="editors-pick">
            <Container classNames={[ "editors-pick__text" ]}>
                <h2>Editor's Pick</h2>
                <p className="text text-small text-bold">Our picks, just for you nam an vidisse admodum omittantur nihli corrumpit</p>
            </Container>

            <Container classNames={[ "editor-pick__slide-container" ]} >
                <Slide>
                    Slide1
                </Slide>
            </Container>
        </section>
    );
}

export default EditorsPick;