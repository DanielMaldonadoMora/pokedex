
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
      <h1>Pokemon Detail</h1>
      <div className={`detail_poke ${pokemon.types?.[0].type.name}`}>
        <img src={pokemon?.sprites?.other?.home.front_default} alt="" className="fotoDetail" />
        <h2>{pokemon.name?.toUpperCase()}</h2>
        <div className="description">
         <p>{pokemonDes?.flavor_text_entries[0].flavor_text}</p>
        </div>
        <ul>
          <li> 
            <div className="height_weight">
              <b>Heigth</b>  {pokemon.height}
              <b>Weight</b>  {pokemon.weight} 
            </div>
         </li>
          
          <li className="stats">
            <b className="stats_title">Stats</b>
            <ul className="stats_list">
              <li> <b>HP</b> {pokemon.stats?.[0].base_stat} </li>
              <li> <b>Atack</b> {pokemon.stats?.[1].base_stat} </li>
              <li> <b>Defense</b> {pokemon.stats?.[2].base_stat} </li>
              <li> <b>Speed</b> {pokemon.stats?.[5].base_stat} </li>
            </ul>
          </li>
         
        </ul>
      </div>
      <ButtonHome/>
    </section>
  );
};

export default PokemonDetail;