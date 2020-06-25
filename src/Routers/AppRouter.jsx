import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../component/Header';
import MovieList from '../component/MovieList';
import MovieDetails from '../component/MovieDetails';
import AddMovie from '../component/addMovie';
import Exemple from '../component/exemple';

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/' component={MovieList} exact={true} />
            <Route path='/movie/:id' component={MovieDetails} />
            <Route path='/add' component={AddMovie} />
            <Route path='/exemple' component={Exemple} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter;