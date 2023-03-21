import Icon from "../Icon";
import Navigation from "../Navigation/Navigation";
import NavigationItem from "../Navigation/Navigation_item";

function UserInfo () {
    return (
        <Navigation classNames={[ "user-info", "text-small", "text-bold" ]}>
            <NavigationItem to="*" classNames={[ "my-collection" ]}>My Collection</NavigationItem>
            <NavigationItem to="*" classNames={[ "username-and-icon" ]}>
                <span>Gailh Pambudi</span>
            </NavigationItem>
            <NavigationItem to="*">
                <Icon url="https://htmlcolorcodes.com/assets/images/colors/black-color-solid-background-1920x1080.png" />
            </NavigationItem>
        </Navigation>
    );
}

export default UserInfo;