import Container from "../../../Container";
import ReadMore from "../../../Read_more";

function AboveTheSea () {
    return (
        <section className="above-the-sea">
            <Container classNames={[ "above-the-sea-text" ]}>
                <h1 className="title">Above The Sea</h1>
                <blockquote className="quote">
                    <p className="text quote__text">
                        Ad lorem aliquid laoreet pri, possim iisque ad vim. Te graecis maluisset eum
                    </p>
                </blockquote>

                <p className="text text-small text-bold">
                    Sit no platonem consetetur mediocritatem, in alienum.Lorem ipsum dolor sit amet, te eam oratio imperdiet, nam an vidisse admodum omittantur, nihil corrumpitan cum. Cu iriure dignissim consequat quo, usu id ceteros ponderum. Ea vel malis iudico quodsi, ex nam error suscipit prodesset. Qui an deserunt imperdiet. Case temporibus qui ut.
                </p>

                <p className="text text-small text-bold">
                    Definitiones ad vim. Et case quodsi complectitur ius, in vel regione viderer. Cu sed fugit adolescens. Ad mea latine percipit, unum dicat habemus et mel. Cu eum causae bonorum. Te pri ornatus probatus, an postea nemore iuvaret sea. Mea te rebum virtute, ullum facilisi comprehensam nec eu. At facer latine nec, te nonumy disputationi reprehendunt usu, ut nam unum integre qualisque. Nulla possit mandamus ne vix.
                </p>

                <ReadMore to="https://www.cntraveler.com/galleries/2016-07-31/water-colors-8-beautiful-photos-of-oceans-from-above" />
            </Container>

            <Container classNames={[ "above-the-sea-image-container" ]}>
                <img src="https://media.cntraveler.com/photos/5798c04651b1fe8b3ce4dbfe/master/pass/mag-tommy-clarke-water-1.jpg" alt="Sea image" />
            </Container>

        </section>
    );
}

export default AboveTheSea;