import { useContext } from "react";
import { UserContext } from "../../../../context/User_context";
import EmailForm from "../../../Email_form";

function Subscribe ({ handleEmailSubscribe }) {
    const user = useContext(UserContext);

    return (
        <section>
            <p className="subscribe-section__text">
                Subscribe to our news letter
            </p>

            {
                user.subscribedToEmail ? 
                <p>You have already subscribed</p>
                :
                <EmailForm handleSubmit={ handleEmailSubscribe } />
            }   
        </section>
    );
}

export default Subscribe;