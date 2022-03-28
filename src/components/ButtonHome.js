import React from 'react';
import { Link } from 'react-router-dom';

const ButtonHome = () => {
    return (
        <Link to="/pokemons/" >
           <button className='home'>Home</button> 
        </Link>
        );
};

export default ButtonHome;