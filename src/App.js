import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NameForm from "./components/NameForm";
import PokemonDetail from "./components/PokemonDetail";
import Pokemons from "./components/Pokemons";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<NameForm/>}/>
          <Route element={<ProtectedRoutes />}>
             <Route path="/pokemons" element={<Pokemons/>} />
             <Route path="/pokemons/:id" element={<PokemonDetail/>} />
          </Route>
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
