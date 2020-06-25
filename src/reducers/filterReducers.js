const filterInitialState = {
    text: "",
    sortBy: "",
}

const filterReducer = (state = filterInitialState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text,
            };
        case "SORT_BY_CATEGORY":
            return {
                ...state,
                sortBy: action.category,
            };
        default:
            return state
    }
}

export default filterReducer;