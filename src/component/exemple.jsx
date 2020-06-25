import React from 'react';
import { NavLink } from 'react-router-dom';
import exemple from '../images/exemple.png'


const Exemple = () => (
    <div>
        <div>
            <NavLink to="/add">🔙 retour à l'ajout du film</NavLink>
        </div>
        <div className="exemple">
            <img src={exemple} alt="exemple" />
        </div>

    </div>
)

export default Exemple;