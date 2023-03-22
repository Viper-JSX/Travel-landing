import Container from "../Container";
import Navigation from "./Navigation";
import NavigationItem from "./Navigation_item";

function AppNavigationBar ({ visible, handleAppNavigationToggle }) {
    return (
        <Navigation classNames={[ "app-navigation-bar", visible ? "visible" : "hidden"]}>
            <NavigationItem to="/" classNames={[ "company-name" ]} handleAppNavigationToggle={ handleAppNavigationToggle }>trppd__</NavigationItem>
            <Container classNames={[ "navigation__items" ]} >
                <NavigationItem to="/" handleAppNavigationToggle={ handleAppNavigationToggle }>Home</NavigationItem>
                <NavigationItem to="/recommendation" handleAppNavigationToggle={ handleAppNavigationToggle }>Recommendation</NavigationItem>
                <NavigationItem to="/explore" handleAppNavigationToggle={ handleAppNavigationToggle }>Explore</NavigationItem>
                <NavigationItem to="/help" handleAppNavigationToggle={ handleAppNavigationToggle }>Help</NavigationItem>
                <NavigationItem to="/about-us" handleAppNavigationToggle={ handleAppNavigationToggle }>About us</NavigationItem>
            </Container>
        </Navigation>
    );
}

export default AppNavigationBar;