import { NavLink } from "react-router-dom";

function NavigationItem ({ children, to, classNames=[], handleAppNavigationToggle = () => null }) {
    return (
        <li className={ `navigation-item ${classNames.join(" ")}` } onClick={ handleAppNavigationToggle }>
            <NavLink to={to} >{ children }</NavLink>
        </li>
    );
}

export default NavigationItem;