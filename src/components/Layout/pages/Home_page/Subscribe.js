import EmailForm from "../../../Email_form";

function Subscribe () {
    function handleEmailFormSubmit (form) {
        console.log("Submit", form);
    }

    return (
        <section>
            <p className="subscribe-section__text">
                Subscribe to our news letter
            </p>

            <EmailForm handleSubmit={ handleEmailFormSubmit } />
        </section>
    );
}

export default Subscribe;