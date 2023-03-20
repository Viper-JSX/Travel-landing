import { DO_NOT_SORT, SORT_BY_NAME, SORT_BY_TITLE } from "../various_things/constants";

function SortBy ({ currentCriteria, sortCriterias, handleSortCriteriaChange }) {
    return (    
        <select className="sort-by" value={ currentCriteria } onChange={ (event) => handleSortCriteriaChange({ criteria: event.target.value }) }>
            {
                sortCriterias.map((criteria) => {
                    let criteriaName;

                    switch (criteria) {
                        case DO_NOT_SORT: {
                            criteriaName = "Sort By";
                            break;
                        }

                        case SORT_BY_NAME: {
                            criteriaName = "Name";
                            break;
                        }

                        case SORT_BY_TITLE: {
                            criteriaName = "Title";
                            break;
                        }

                        case DO_NOT_SORT: {
                            criteriaName = "Country";
                            break;
                        }

                        default: {
                            criteriaName = "Sort By";
                        }
                    }

                    return <option value={ criteria } key={criteria}>{ criteriaName }</option>;
                }
        
                )
            }
        </select>
    );
}

export default SortBy;