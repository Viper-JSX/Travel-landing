import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Container from "../Container";

function Footer () {
    return (
        <footer>
            <b>trppd__</b>
            <b>&copy; 2017-2018</b>
            <Container classNames={[ "footer__social-media" ]}>
                <FontAwesomeIcon icon={ faInstagram } />
                <FontAwesomeIcon icon={ faFacebookF } />
                <FontAwesomeIcon icon={ faTwitter } />
            </Container>
        </footer>   
    );
}

export default Footer;