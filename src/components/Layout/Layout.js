import { Route, Routes } from "react-router";

import Home from "./pages/Home_page/Home_page";
import NotFound from "./pages/Not_found_page/Not_found_page";
import Recommendation from "./pages/Recommendation_page/Recommendation_page";
import AboutUs from "./pages/About_us_page/About_us_page";
import Explore from "./pages/Explore_page/Explore_page";
import Help from "./pages/Help_page/Help_page";

function Layout () {
    return (
        <div className="Layout">
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