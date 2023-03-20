function NavigationToggle ({ isToggled=false, handleToggle }) {
    return (
        <div className="navigation-toggle" onClick={ handleToggle }>
            {
                isToggled ? 
                "+"
                :
                "-"
            }
        </div>
    );
}

export default NavigationToggle;