import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Container from "../Container";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <footer>
            <b className="company-name">trppd__</b>
            <b className="copy">&copy; 2017-2018</b>
            <Container classNames={[ "footer__social-media" ]}>
                <Link to="https://www.instagram.com/" target="_blank">
                    <FontAwesomeIcon icon={ faInstagram } />
                </Link>

                <Link to="https://www.facebook.com/" target="_blank">
                    <FontAwesomeIcon icon={ faFacebookF } />
                </Link>

                <Link to="https://twitter.com/" target="_blank">
                    <FontAwesomeIcon icon={ faTwitter } />
                </Link>
            </Container>
        </footer>   
    );
}

export default Footer;