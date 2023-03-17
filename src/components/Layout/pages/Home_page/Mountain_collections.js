import { mountainCollectionsCards } from "../../../../various_things/cards";
import Card from "../../../Card/Card";
import Container from "../../../Container";

function MountainCollections () {
    return (
        <section className="mountain-collections">
            <Container classNames={[ "mountain-collections__inner" ]}>   
                <Container classNames={[ "mountain-collections__text" ]}>
                    <h1>Mountain collections</h1>
                    <p>
                        See our best mountain collections, explore and Lorem impus dolor sit amet, te eam oratio imperdiet, nam an vidisse admodum omittantur, nihil corrumpit an cum.
                    </p>
                </Container>

                <Container classNames={[ "mountain-collections__cards" ]}>
                    {
                        mountainCollectionsCards.map((card) => <Card card={ card } classNames={[ "landscape" ]} key={ `${ card.title }_${ card.text }` } />)
                    }
                </Container>
            </Container>
        </section>
    );
}

export default MountainCollections;