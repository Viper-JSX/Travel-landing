import { Route, Routes } from "react-router";

import Navigation from "../Navigation/Navigation";
import NavigationItem from "../Navigation/Navigation_item";

import Home from "./pages/Home_page/Home_page";
import NotFound from "./pages/Not_found_page/Not_found_page";
import Recommendation from "./pages/Recommendation_page/Recommendation_page";
import AboutUs from "./pages/About_us_page/About_us_page";
import Explore from "./pages/Explore_page/Explore_page";
import Help from "./pages/Help_page/Help_page";
import Header from "../Header/Header";

function Layout () {
    return (
        <div className="Layout">
            <Header />

            <Routes>
                <Route path="/" element={ <Home /> } />
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