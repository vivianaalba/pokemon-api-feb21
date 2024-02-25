console.log('Is this thing on?');

import React from 'react'
import './styles/App.css'
import PokemonLogo from '/images/PokemonLogo.png'
// import useRequest from './hooks/useRequest'
// import express from 'express';

// const app = express();

// app.use(cors({
//     origin: 'https://pokeapi.co/api/v2/', // Allow requests from this origin
//     methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allowed HTTP methods
//     allowedHeaders: 'Content-Type,Authorization' // Allowed request headers
// }));

export default function App() {
  // section 4.10
  //const { isLoading, data, error } = useRequest('/pokemon');
  
  const DisplayPokemon = () => {
    if(data) {
      return (
        <div>
          {
            // <h2>{result.name}</h2>
            data.results.map((pokemon) => {
              return (
                <h2 key={pokemon.name}>{pokemon.name}</h2>
              );
            })
          }
        </div>
      );
    }
  }

  const ErrorHandling = () => {
    if (isLoading) {
      return <div>Loading Pokemon data...</div>;
    } else if (error) {
      return <div>{error}: There was an error with getting data</div>;
    } else {
      return null; // Return null if neither loading nor error
    }
  };
  
  return (
    

    <img 
      className = "pokemon--logo"
      src= {PokemonLogo}
      alt = "Pokemon Logo" 
    />

  );

}



