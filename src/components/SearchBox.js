import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({setType,setPokemons}) => {
    const searchType=()=>{
        if(search==="0"){
              axios
             .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
             .then((res)=>setPokemons(res.data.results))
             .then(setType(null))
            console.log("estado en cero")
            
        }else
        axios.get(`https://pokeapi.co/api/v2/type/${search}`)
        .then(res=>setType(res.data.pokemon))

    }

    const [search, setSearch] = useState('')
    return (
        <div className='search_box'>
            <select name="types" className='input_search' onChange={e => setSearch(e.target.value)}  value={search}>

                <option value="0">Todos</option>
                <option value="1">Normal</option>

                <option value="2">Fighting</option>

                <option value="3">Flying</option>
                <option value="4">Poison</option>
                <option value="5">Ground</option>
                <option value="6">Rock</option>
                <option value="7">Bug</option>
                <option value="8">Ghost</option>
                <option value="9">Steel</option>
                <option value="10">Fire</option>
                <option value="11">Water</option>
                <option value="12">Grass</option>
                <option value="13">Electic</option>
                <option value="14">Psychic</option>
                <option value="15">Ice</option>
                <option value="16">Dragon</option>
                <option value="17">Dark</option>
                <option value="18">Fairy</option>

            </select>
            
            <button className='search_buton' onClick={searchType}>Search</button>
        </div>
    );
};

export default SearchBox;