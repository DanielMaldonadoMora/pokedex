import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import PokemonInfo from "./PokemonInfo"
import SearchBox from "./SearchBox";
import logo from "../assets/pokedex.png"


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
            
    },[]);
    
    useEffect(()=>{
        if(type){
            setPokemons(type)
           
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
            <div className="header"> 
            <img src={logo} alt="nosta" className="logo_header" />
                <h1 >Pokemons</h1>
            </div>
            <p className="welcome"> <b>Welcome {name},</b> Aqui encontraras a tus pokemon favoritos </p>
            <SearchBox setType={setType} setPokemons={setPokemons}/>
            <Pagination pokePerPage={pokePerPage} totalPoke={pokemons.length} paginate={paginate}/>
            <ul className="character-list">          
                {typeList()}
            </ul>
            <Pagination pokePerPage={pokePerPage} totalPoke={pokemons.length} paginate={paginate}/>
        </section>


    );
};

export default Pokemons;