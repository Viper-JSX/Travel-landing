import Icon from "../Icon";
import Navigation from "../Navigation/Navigation";
import NavigationItem from "../Navigation/Navigation_item";

function UserInfo () {
    return (
        <Navigation>
            <NavigationItem to="*">My Collection</NavigationItem>
            <NavigationItem to="*">
                Gailh Pambudi
                <Icon url="https://www.computerhope.com/jargon/b/black.jpg" />
            </NavigationItem>
        </Navigation>
    );
}

export default UserInfo;