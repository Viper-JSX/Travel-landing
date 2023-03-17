import { useState } from "react";

function EmailForm ({ handleSubmit }) {
    const [ form, setForm ] = useState({ email: "" });

    function handleFormChange (event) {
        setForm({ ...form, [ event.target.name ]: event.target.value  });
    }

    return (
        <form className="subscribe-form" onSubmit={ (event) =>  handleSubmit({ event, formData: form }) }>
            <input 
                type="email" 
                name="email"
                value={ form.email } 
                required 
                placeholder="Your email" 
                onChange={ handleFormChange } 
            />

            <input 
                type="submit" 
                value="Subscribe" 
            />
        </form>
    );
}

export default EmailForm;