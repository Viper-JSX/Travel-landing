import Icon from "../Icon";
import Navigation from "../Navigation/Navigation";
import NavigationItem from "../Navigation/Navigation_item";

function UserInfo () {
    return (
        <Navigation>
            <NavigationItem to="*">My Collection</NavigationItem>
            <NavigationItem to="*">
                Gailh Pambudi
                <Icon src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhtmlcolorcodes.com%2Fcolors%2Fblack%2F&psig=AOvVaw11sF3s9yX0EK2OOmUA5Q9B&ust=1678862391977000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOji-8Ta2v0CFQAAAAAdAAAAABAE" />
            </NavigationItem>
        </Navigation>
    );
}

export default UserInfo;