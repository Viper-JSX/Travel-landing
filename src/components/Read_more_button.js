import { Link } from "react-router-dom";

function ReadMoreButton ({ to }) {
    return (
        <Link className="read-more-button" to={ to } target="_blank">
            <button>Read more</button>
        </Link>
    );
}

export default ReadMoreButton;