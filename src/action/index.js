import { v1 as uuid } from 'uuid';

export const addMovie = ({
    title = "",
    poster = "",
    trailer = "",
    category = "",

} = {}) => ({
    type: "ADD_MOVIE",
    movie: {
        id: uuid(),
        title,
        poster,
        trailer,
        category,
        likes: 0,
        dislikes: 0
    },
});

export const removeExpense = (id) => ({
    type: "REMOVE_MOVIE",
    id,
});