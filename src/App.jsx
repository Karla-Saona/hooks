import useFetchCharacters from "./hooks/useFetchCharacters";
import './App.css';

function App() {

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
const urlRick = 'https://rickandmortyapi.com/api/character/1';

const pokemon = useFetchCharacters(urlPokemon);
const rick = useFetchCharacters(urlRick);

return (
  <div>

  <h2>Personaje Pokemon</h2>
  <p>{pokemon?.name}</p>
  <img src={pokemon?.sprites?.front_default} />

    <h2>Personaje Rick and Morty</h2>
    <p>{rick?.name}</p>
    <img src={rick?.image} />
    </div>
);
}

export default App;