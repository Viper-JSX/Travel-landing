function Container ({ classNames, children }) {
    return (
        <div className={`container ${ classNames.join("  ") }`}>
            { children }
        </div>
    );
}

export default Container;