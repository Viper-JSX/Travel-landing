import { Route, Routes } from "react-router";

function Layout () {
    return (
        <div className="Layout">
            <Routes>
                <Route path="/" element={ <h2>Home</h2> } />
                <Route path="/recommendation" element={ <h2>Recommendation</h2> } />
                <Route path="/explore" element={ <h2>Explore</h2> } />
                <Route path="/help" element={ <h2>Help</h2> } />
                <Route path="/about-us" element={ <h2>About us</h2> } />
                <Route path="*" element={ <h2>Not found</h2> } />
            </Routes>
        </div>
    );
}

export default Layout;