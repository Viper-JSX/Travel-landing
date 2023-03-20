import { Link } from "react-router-dom";
import { BUTTON } from "../various_things/constants";

function ReadMore ({ to, type=BUTTON }) {
    return (
        <Link className={`read-more ${ type===BUTTON ? "button" : "text text-small text-bold" }`} to={ to } target="_blank">
            {
                type === BUTTON ? 
                <button className="text-bold text-small" >Read more</button>
                :
                <span className="text-bold">Read more</span>
            }
        </Link>
    );
}

export default ReadMore;