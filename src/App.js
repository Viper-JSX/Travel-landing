import "./scss/main.scss";
import Layout from "./components/Layout/Layout";
import { useState } from "react";
import { UserContext } from "./context/User_context";


function App(){
    const [ user, setUser ] = useState({ subscribedToEmail: false, email: "" });
    const [ appNavigationVisible, setAppNavigationVisible ] = useState(false);
    
    function handleAppNavigationToggle () {
        setAppNavigationVisible(!appNavigationVisible);
    }

    function handleEmailSubscribe ({ email }) {
        setUser({ ...user, subscribedToEmail: true, email });
    }

    function handleResize () {
        if (window.innerWidth >= 980) {
            setAppNavigationVisible(true);
        }

        else {
            setAppNavigationVisible(false);
        }
        console.log(window.innerWidth)
    }

    window.addEventListener("resize", handleResize);

    return(
        <div>
            <UserContext.Provider value={ user }>
                <Layout 
                    appNavigationVisible={ appNavigationVisible }
                    handleAppNavigationToggle={ handleAppNavigationToggle }
                    handleEmailSubscribe={ handleEmailSubscribe }
                />
            </UserContext.Provider>
        </div>
    );
}

export default App;

//1440 x 920