import { useContext } from "react";
import { UserContext } from "../../../../context/User_context";
import EmailForm from "../../../Email_form";

function Subscribe () {
    const user = useContext(UserContext);

    function handleEmailFormSubmit ({ event, formData }) {
        event.preventDefault();
        console.log("Submit", formData);
    }
    return (
        <section>
            <p className="subscribe-section__text">
                Subscribe to our news letter
            </p>

            {
                user.subscribedToEmail ? 
                <p>You have already subscribed</p>
                :
                <EmailForm handleSubmit={ handleEmailFormSubmit } />
            }   
        </section>
    );
}

export default Subscribe;