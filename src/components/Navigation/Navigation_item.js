import { NavLink } from "react-router-dom";

function NavigationItem ({ to, children }) {
    return (
        <li>
            <NavLink to={to} >{ children }</NavLink>
        </li>
    );
}

export default NavigationItem;