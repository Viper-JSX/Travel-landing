function Navigation ({ children, classNames=[] }) {
    
    return (
        <nav className={`navigation ${ classNames.join(" ") }`}>
            <ul>
                { children }
            </ul>
        </nav>
    );
}

export default Navigation