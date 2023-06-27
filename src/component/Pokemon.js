import React, { useState } from 'react';
import pokemonData from './pokedex.json';
import TypeColors from './TypeColors';

const Pokemon = () => {
  const [langue, setLangue] = useState('french');
  const [searchPoke, setSearchPoke] = useState(''); 

  // const getTypeColor = (type) => {
  //   const colors = {
  //     Grass: '#78C850',
  //     Poison: '#A040A0',
  //   };

  //   return colors[type[0]];
  // };

  //const slicedData = pokemonData.slice(0, 5); // Limite aux cinq premiers Pokémon

  const handleLangueChange = (newLangue) => {
    setLangue(newLangue);
  };

  const handleSearchChange = (event) => {
    setSearchPoke(event.target.value);
  };

  const filteredData = pokemonData.filter((pokemon) =>
    pokemon.name[langue].toLowerCase().includes(searchPoke.toLowerCase())
  );


  return (
    <div>

      <div>
        <button onClick={() => handleLangueChange('english')}>EN</button>
        <button onClick={() => handleLangueChange('french')}>FR</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Rechercher un Pokémon"
          value={searchPoke}
          onChange={handleSearchChange}
        />
      </div>

      {filteredData.map((pokemon) => (
        <div key={pokemon.id}>
          <h2>
          {pokemon.name[langue]}
          </h2>
          <p>Type: <TypeColors type={pokemon.type[0]}/> {pokemon.type.slice(1).join(',')}</p>
          <p>Stats:</p>
          <ul>
            <li>HP: {pokemon.base.HP}</li>
            <li>Attack: {pokemon.base.Attack}</li>
            <li>Defense: {pokemon.base.Defense}</li>
            <li>Sp. Attack: {pokemon.base['Sp. Attack']}</li>
            <li>Sp. Defense: {pokemon.base['Sp. Defense']}</li>
            <li>Speed: {pokemon.base.Speed}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Pokemon;