import React from 'react';
import MovieItem from './MovieItem';
import FilterMovie from './filterMovie';
import { getVisibleMovies } from '../selectors/movies';
import { connect } from 'react-redux';

const MovieList = (props) => {
    const movies = props.movies;
    return (
        <div>
            <FilterMovie />
            <div className="movie-container">
                {
                    movies && movies.map((movieItem) => {
                        return <MovieItem key={movieItem.id} movieDetails={movieItem} />
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('les states: ', state)
    return {
        movies: getVisibleMovies(state.movies, state.filters)
    }
}

export default connect(mapStateToProps)(MovieList);