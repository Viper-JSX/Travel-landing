function NavigationToggle ({ isToggled=false }) {
    return (
        <div className="navigation-toggle">
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