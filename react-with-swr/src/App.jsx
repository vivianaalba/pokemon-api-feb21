console.log('Is this thing on?');

import React from 'react'
import './styles/App.css'
import PokemonLogo from '/images/PokemonLogo.png'
import useRequest from './hooks/useRequest'
import Pokemon from './components/pokemon';

export default function App() {

 // section 4.10 - Destructuring to access properties fetched from the /pokemon endpoint
 // isLoading - check the state of the fetch request (‘Pending’, ‘fulfilled’, and ‘rejected’)
 // error occurs if the fetch request is settled as ‘rejected’
 // data received when the fetch request is settled as ‘fulfilled’
 // useRequest hook will give us the URL we will be using to make the request
 const { isLoading, data, error } = useRequest('pokemon');



 // to render, need a return () function with the appropriate JSX inside
 // JSX itself will be a <div></div> wrapping container
 // nested using curly brackets {}, the data has a property called results. It is inside that property that all other Pokemon are stored
 // iterate over the results object to access individual Pokemon, so we will use the JavaScript mapmethod and render each Pokemon as an <h2> ... </h2>
 // each element requires a unique key which is why key has a value of pokemon.name
 const DisplayPokemon = () => {
   if(data) {
     return (
       <div>
         {
           // <h2>{result.name}</h2>
           data.results.map((pokemon) => {
             return (
              <Pokemon key={[pokemon.name]} pokemon={pokemon} />
             );
           })
         }
       </div>
     );
   }
 }

 const ErrorHandling = () => {
  if (isLoading) {
    console.log("Loading Pokemon data...")
    return <div>Loading Pokemon data...</div>;
  } else if (error) {
    console.log("There was an error getting data")
    return <div>{error}: There was an error getting data</div>;
  } else {
    console.log("No load, no error")
    return null;
  }
};


  
  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <img
       className = "pokemon--logo"
       src= {PokemonLogo}
       alt = "Pokemon Logo"
     />


     <DisplayPokemon />
     <ErrorHandling />
    </div>
  );
}