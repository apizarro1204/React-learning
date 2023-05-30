import imageRickMorty from "./img/rickmorty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results); // Este result proviene de uno de los arreeglos de characters en la API.
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="title">Rick & Morty</h1>
          {characters ? (
            <Characters characters={characters} />
          ) : (
            <>
              <img
                src={imageRickMorty}
                alt="Rick & Morty"
                className="img-rickmorty"
              />
              <button onClick={reqApi} className="btn-search">
                Buscar Personajes
              </button>
            </>
          )}
        </header>
      </div>
    </>
  );
}

export default App;
