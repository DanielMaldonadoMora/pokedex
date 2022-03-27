import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import PokemonInfo from "./PokemonInfo"
import SearchBox from "./SearchBox";

const Pokemons=()=>{
    const name=useSelector((state)=> state.name);
    const [pokemons,setPokemons]=useState([]);
    const [type, setType] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [pokePerPage] = useState(10);

    useEffect(()=>{
        axios
            .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
            .then((res)=>setPokemons(res.data.results))
            
            console.log(pokemons)
    },[]);
    
    useEffect(()=>{
        if(type){
            setPokemons(type)
            console.log(pokemons)
        }
           
    },[type]);

   const typeList=()=> {
    if(type) {return (currentPoke.map((pokemon)=>(
        <li key={pokemon.pokemon?.name} className="pokemon-column">
            <PokemonInfo url={`${pokemon.pokemon?.url}`}/>
        </li>
        )))}
    else {return(currentPoke.map((pokemon)=>(
            <li key={pokemon.name} className="pokemon-column">
                <PokemonInfo url={`${pokemon.url}`}/>
            </li>
            )))}
   }
   console.log(pokemons)

     // Get current posts
    const indexOfLastPoke = currentPage * pokePerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokePerPage;
    const currentPoke = pokemons.slice(indexOfFirstPoke, indexOfLastPoke);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <section>
            <h1>Pokemons</h1>
            <p className="welcome">Welcome {name}</p>
            <Pagination pokePerPage={pokePerPage} totalPoke={pokemons.length} paginate={paginate}/>
            <SearchBox setType={setType} setPokemons={setPokemons}/>
            <ul className="character-list">
           
                   
            {typeList()}
              
                
            </ul>
        </section>


    );
};

export default Pokemons;