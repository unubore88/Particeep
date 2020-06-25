import React, { Component } from 'react';
import { addMovie } from '../action/index';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            poster: "",
            trailer: "",
            category: "",
            likes: 0,
            dislikes: 0
        }
    }

    onChangeTitle = (e) => {
        let title = e.target.value;
        this.setState({ title })
    }

    onChangePoster = (e) => {
        let poster = e.target.value;
        this.setState({ poster })
    }

    onChangeTrailer = (e) => {
        let trailer = e.target.value;
        this.setState({ trailer })
    }

    onChangeCategory = (e) => {
        let category = e.target.value;
        this.setState({ category })
    }

    onSubmitMovie = (e) => {
        e.preventDefault();
        this.props.dispatch(addMovie({
            title: this.state.title,
            poster: this.state.poster,
            trailer: this.state.trailer,
            category: this.state.category
        }))
        this.props.history.push('/')
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <NavLink to="/">🏠</NavLink>
                <form className="add-movie-container" onSubmit={this.onSubmitMovie}>
                    <div className="box">

                        <label>Titre du film</label>
                        <input type="text" placeholder="tapez le titre du film" onChange={this.onChangeTitle} required />
                        <label>Lien de l'affiche du film</label>
                        <input type="text" placeholder="copier le lien de l'affiche au format png ou jpg/jpeg" onChange={this.onChangePoster} required />
                        <label>Lien du trailer youtube</label>
                        <input type="text" placeholder="https://www.youtube.com/embed/bvRgK66MPcQ" onChange={this.onChangeTrailer} required />
                        <ol>
                            <li>Cliquez sur l'icone partager en bas de la vidéo Youtube.</li>
                            <li>Cliquer sur integrer.</li>
                            <li>Copier le lien qui se trouve dans le src, exemple: src="https://www.youtube.com/embed/bvRgK66MPcQ" </li>
                            <p>(cliquez sur le lien "Voir exemple", en bas à gauche si besoin)</p>
                        </ol>
                        <label>La catégorie du film</label>
                        <input type="text" placeholder="comique, science fiction ..." onChange={this.onChangeCategory} required />
                        <button type="submit">Valider</button>
                    </div>
                </form>
                <NavLink to="/exemple">Voir exemple (lien en fluo)</NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(AddMovie)