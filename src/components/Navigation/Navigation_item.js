import { NavLink } from "react-router-dom";

function NavigationItem ({ children, to, classNames=[] }) {
    return (
        <li className={ `navigation-item ${classNames.join(" ")}` }>
            <NavLink to={to} >{ children }</NavLink>
        </li>
    );
}

export default NavigationItem;