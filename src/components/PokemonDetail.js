
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonHome from "./ButtonHome";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [pokemonDes, setPokemonDes] = useState();


  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res)=>setPokemon(res.data));
  
    },[id]);

    useEffect(()=>{
        axios.get(pokemon.species?.url).then((res)=>setPokemonDes(res.data))
    },[pokemon])
    
    
  return (
    <section>
      <ButtonHome/>
      <h1>Pokemon Detail</h1>
      <img src={pokemon?.sprites?.other?.home.front_default} alt="" />
      <h2>{pokemon.name?.toUpperCase()}</h2>
      <p>{pokemonDes?.flavor_text_entries[0].flavor_text}</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default PokemonDetail;