import "./scss/main.scss";
import Layout from "./components/Layout/Layout";
import { useState } from "react";
import { UserContext } from "./context/User_context";


function App(){
    const [ user, setUser ] = useState({ subscribedToEmail: false, email: "" });

    function handleEmailSubscribe ({ email }) {
        setUser({ ...user, subscribedToEmail: true, email });
    }

    return(
        <div>
            <UserContext.Provider value={ user }>
                <Layout 
                    handleEmailSubscribe={ handleEmailSubscribe }
                />
            </UserContext.Provider>
        </div>
    );
}

export default App;

//1440 x 920