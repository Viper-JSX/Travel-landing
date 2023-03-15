import Navigation from "../Navigation/Navigation";
import NavigationItem from "../Navigation/Navigation_item";
import UserInfo from "./User_info";

function Header () {
    return (
        <header className="header">
            <Navigation classNames={[ "main-navigation" ]}>
                <NavigationItem to="/" classNames={[ "company-name" ]}>trppd__</NavigationItem>
                <NavigationItem to="/">Home</NavigationItem>
                <NavigationItem to="/recommendation">Recommendation</NavigationItem>
                <NavigationItem to="/explore">Explore</NavigationItem>
                <NavigationItem to="/help">Help</NavigationItem>
                <NavigationItem to="/about-us">About us</NavigationItem>
            </Navigation>

            <UserInfo />            
        </header>
    );
}

export default Header;