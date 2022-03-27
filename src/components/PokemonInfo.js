import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import switchType from '../utils/switchType'

const PokemonInfo = ({ url }) => {
    const [pokemon, setPokemon]=useState({});

    useEffect(()=>{
        axios.get(url).then((res)=>setPokemon(res.data));
    },[url]);



    return (
        <Link to={`/pokemons/${pokemon.id}`} >
            <div className={`pokemon_card ${switchType(pokemon?.types?.[0].type.name)}`} >
                <img src={pokemon?.sprites?.other?.home.front_default} alt="" className="infoFoto"/>
                <div className="infoPoke">
                    <h3>{pokemon.name?.toUpperCase()}</h3>
                    <p>{pokemon?.types?.[0].type?.name} {pokemon?.types?.[1]? `/${pokemon?.types?.[1].type.name}`:""}</p>
                   
                </div>
            </div>
        </Link>
    )
};

export default PokemonInfo;