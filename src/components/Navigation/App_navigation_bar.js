import Container from "../Container";
import Navigation from "./Navigation";
import NavigationItem from "./Navigation_item";

function AppNavigationBar ({ visible }) {
    const viewportWidth = window.innerWidth;
    console.log(viewportWidth)

    //const navigationState = ( viewportWidth <= 980 && !visible ) ? "hidden" : "visible"

    return (
        <Navigation classNames={[ "app-navigation-bar", visible ? "visible" : "hidden"]}>
            <NavigationItem to="/" classNames={[ "company-name" ]}>trppd__</NavigationItem>
            <Container classNames={[ "navigation__items" ]}>
                <NavigationItem to="/">Home</NavigationItem>
                <NavigationItem to="/recommendation">Recommendation</NavigationItem>
                <NavigationItem to="/explore">Explore</NavigationItem>
                <NavigationItem to="/help">Help</NavigationItem>
                <NavigationItem to="/about-us">About us</NavigationItem>
            </Container>
        </Navigation>
    );
}

export default AppNavigationBar;