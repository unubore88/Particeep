import React from 'react';
import { setTextFilter, setCategoryFilter } from "../action/filter";
import { connect } from 'react-redux';

const FilterMovie = (props) => {
    const movies = props.movies;
    return (
        <div>
            <span>🔍</span> <input type="text" placeholder=" chercher un film" value={props.filters.text} onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }} />
            <select name="" id="" onChange={(e) => {
                if (e.target.value === "Comedy") {
                    props.dispatch(setCategoryFilter("Comedy"))
                }
            }}>
                {movies && movies.map((movieItem) => {
                    return <option value={movieItem.category}>{movieItem.category}</option>
                })}
            </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('state filtermovie: ', state)
    return {
        filters: state.filters,
        movies: state.movies
    }
}

export default connect(mapStateToProps)(FilterMovie)
