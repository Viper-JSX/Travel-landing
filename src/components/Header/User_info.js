import Icon from "../Icon";
import Navigation from "../Navigation/Navigation";
import NavigationItem from "../Navigation/Navigation_item";

function UserInfo () {
    return (
        <Navigation classNames={[ "user-info", "text-small", "text-bold" ]}>
            <NavigationItem to="*">My Collection</NavigationItem>
            <NavigationItem to="*">
                Gailh Pambudi
                <Icon url="https://htmlcolorcodes.com/assets/images/colors/black-color-solid-background-1920x1080.png" />
            </NavigationItem>
        </Navigation>
    );
}

export default UserInfo;