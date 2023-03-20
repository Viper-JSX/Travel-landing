import { faList, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavigationToggle ({ isToggled=false, handleToggle }) {
    return (
        <div className={`navigation-toggle ${ isToggled ? "toggled" : "" }`} onClick={ handleToggle }>
            {
                isToggled ? 
                <FontAwesomeIcon icon={ faXmark } />
                :
                <FontAwesomeIcon icon={ faList } />
            }
        </div>
    );
}

export default NavigationToggle;