import { SORT_BY_COUNTRY, SORT_BY_NAME, SORT_BY_TITLE } from "../various_things/constants";

function sort (array, sortCriteria=SORT_BY_TITLE, order=1) {
    let sorted = [...array];

    switch (sortCriteria) {
        case SORT_BY_NAME: {
            sorted.sort((a, b) => {
                return (
                    order === 1 ? 
                    a.name.localeCompare(b.name)
                    :
                    b.name.localeCompare(b.name)
                );  
            });
            break;
        }

        case SORT_BY_TITLE: {
            sorted.sort((a, b) => {
                return (
                    order === 1 ? 
                    a.title.localeCompare(b.title)
                    :
                    b.title.localeCompare(a.title)
                );  
                
            });
            break;
        }

        case SORT_BY_COUNTRY: {
            sorted.sort((a, b) => {
                return (
                    order === 1 ? 
                    a.country.localeCompare(b.country)
                    :
                    b.country.localeCompare(a.country)
                );  
                
            });
            break;
        }
    }

    return sorted;
}

export { sort };