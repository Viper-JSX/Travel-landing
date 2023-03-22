import { Route, Routes } from "react-router";

import NavigationToggle from "../Navigation/Navigation_toggle";
import AppNavigationBar from "../Navigation/App_navigation_bar";
import HomePage from "./pages/Home_page/Home_page";
import NotFound from "./pages/Not_found_page/Not_found_page";
import Recommendation from "./pages/Recommendation_page/Recommendation_page";
import AboutUs from "./pages/About_us_page/About_us_page";
import Explore from "./pages/Explore_page/Explore_page";
import Help from "./pages/Help_page/Help_page";

function Layout ({ appNavigationVisible, handleEmailSubscribe, handleAppNavigationToggle }) {
    return (
        <div className="Layout">
            <NavigationToggle isToggled={ appNavigationVisible } handleToggle={ handleAppNavigationToggle } />
            <AppNavigationBar visible={ appNavigationVisible } handleAppNavigationToggle={ handleAppNavigationToggle } />

            <Routes>
                <Route path="/" element={ <HomePage handleEmailSubscribe={ handleEmailSubscribe } /> } />
                <Route path="/recommendation" element={ <Recommendation /> } />
                <Route path="/explore" element={ <Explore /> } />
                <Route path="/help" element={ <Help /> } />
                <Route path="/about-us" element={ <AboutUs /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </div>
    );
}

export default Layout;