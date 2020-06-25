import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const MovieDetails = (props) => {
    const movie = props.movie
    const baseUrl = "https://www.youtube.com/embed/";
    return (
        <div>
            <NavLink to="/">🏠 - Acceuil</NavLink>
            <div className="box-movie">
                <h3>{movie.title}</h3>
                <iframe width="980"
                    height="615"
                    src={movie.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        movie: state.movies.find((movie) => movie.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(MovieDetails);