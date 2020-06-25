export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const setCategoryFilter = (category) => ({
    type: "SORT_BY_CATEGORY",
    category
})