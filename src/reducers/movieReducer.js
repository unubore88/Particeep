import { movies } from '../utils/movies';

const movieState = movies;

const moviesReducer = (state = movieState, action) => {

    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                action.movie
            ];
        case "REMOVE_MOVIE":
            return state.filter((movie) => {
                if (movie.id !== action.id) {
                    return true
                }
            })
        default:
            return state
    }
}


export default moviesReducer