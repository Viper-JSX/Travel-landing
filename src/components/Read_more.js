import { Link } from "react-router-dom";
import { BUTTON } from "../various_things/constants";

function ReadMore ({ to, type=BUTTON }) {
    return (
        <Link className="read-more-button" to={ to } target="_blank">
            {
                type === BUTTON ? 
                <button>Read more</button>
                :
                "Read more"
            }
        </Link>
    );
}

export default ReadMore;