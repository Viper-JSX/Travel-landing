import { useContext } from "react";
import { UserContext } from "../../../../context/User_context";
import Container from "../../../Container";
import EmailForm from "../../../Email_form";

function Subscribe ({ handleEmailSubscribe }) {
    const user = useContext(UserContext);

    return (
        <section className="subscribe-section">
            <Container classNames={[ "subscribe-section__inner" ]}>
                <p className="text text-bold text-small">
                    Subscribe to our news letter
                </p>

                {
                    user.subscribedToEmail ? 
                    <p>You have already subscribed</p>
                    :
                    <EmailForm handleSubmit={ handleEmailSubscribe } />
                }   

            </Container>
        </section>
    );
}

export default Subscribe;