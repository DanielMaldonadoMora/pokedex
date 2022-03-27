import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/pokedex.png"

const NameForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_NAME", payload: name });
    navigate("/pokemons");
  };

  return (
    <section className="name_form" >
      
        <img src={logo} alt="nosta" className="logo" />
        <div className="form_down">
        <h1 >Pokedex Nacional</h1>
        <form onSubmit={submit}>
          <label>
            <p className="start">Coloca tu nombre entrenador</p>
            <input
              
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button className="button_submit">Comenzar</button>
        </form>
       </div>
    </section>
  );
};

export default NameForm;
