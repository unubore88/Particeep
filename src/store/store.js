import { combineReducers, createStore } from 'redux';
import moviesReducer from '../reducers/movieReducer';
import filterReducer from '../reducers/filterReducers';

const configureStore = createStore(
    combineReducers({
        movies: moviesReducer,
        filters: filterReducer
    })
)

export default configureStore;