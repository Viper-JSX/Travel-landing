function SortBy ({ currentCriteria, sortCriterias, handleSortCriteriaChange }) {
    return (    
        <select value={ currentCriteria } onChange={ (event) => handleSortCriteriaChange({ criteria: event.target.value }) }>
            {
                sortCriterias.map((criteria) =>
                    <option value={ criteria } key={criteria}>{criteria}</option>
                )
            }
        </select>
    );
}

export default SortBy;