function SortBy ({ sortCriterias, handleSortCriteriaChange }) {
    return (    
        <select>
            {
                sortCriterias.map((criteria) =>
                    <option value={ criteria }>{criteria}</option>
                )
            }
        </select>
    );
}

export default SortBy;