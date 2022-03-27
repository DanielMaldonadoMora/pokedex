import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonInfo = ({ url }) => {
    const [pokemon, setPokemon]=useState({});

    useEffect(()=>{
        axios.get(url).then((res)=>setPokemon(res.data));
    },[url]);

    return (
        <Link to={`/pokemons/${pokemon.id}`} >
            <div className="pokemon-card" >
                <img src={pokemon?.sprites?.other?.home.front_default} alt="" className="infoFoto"/>
                <div>
                    <p>{pokemon.name?.toUpperCase()}</p>
                   
                </div>
            </div>
        </Link>
    )
};

export default PokemonInfo;