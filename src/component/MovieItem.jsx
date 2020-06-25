import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../action/index';

const MovieItem = (props) => {
    const movieDetails = props.movieDetails;
    const [moreLike, setMoreLike] = useState(movieDetails.likes)
    const [lessLike, setLessLike] = useState(movieDetails.dislikes)
    return (
        <div className="movie-item">
            <Link to={`/movie/${movieDetails.id}`}>
                <p className="movie-item__title">{movieDetails.title}</p>

                <img src={movieDetails.poster} alt={movieDetails.title} width={120} height={140} />
                <p className="">{movieDetails.category}</p>
            </Link>
            <div>
                <button onClick={() => { setMoreLike(moreLike + 1) }}>👍</button>
                <button onClick={() => { setLessLike(lessLike + 1) }}>👎</button>
            </div>
            <p> {moreLike} - {lessLike}</p>
            <button
                className="delete-button"
                onClick={() => {
                    props.dispatch(removeExpense(movieDetails.id))
                }}>supprimer</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("state: ", state);
    return {
        movie: state.movies
    }
}

export default connect(mapStateToProps, null)(MovieItem)