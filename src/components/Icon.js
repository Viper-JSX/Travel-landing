import Container from "./Container";

function Icon ({ url }) {
    return (
        <Container classNames={[ "icon-container" ]}> 
            <img src={ url } alt="Icon" />
        </Container>
    );
}

export default Icon;