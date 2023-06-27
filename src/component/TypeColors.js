import React from 'react';

const TypeColors = ({ type }) => {
    
    const typeColors = {
    Electric: 'yellow',
    Grass: 'green',
    Fire: 'red',
    Water: 'blue',
    Bug: 'gray',
    Normal: 'black',
    Poison: 'gray',
    Ground: 'gray',
    Fairy: 'turquoise',
    Fighting: 'black',
    Psychic: 'black',
    Ghost: 'gray',
    Rock: 'gray',
    Ice: 'lightblue',
    Dragon: 'orange',
    Dark: 'black',
    Steel: 'gray',
};

return <span style={{ color: typeColors[type] }}>{type}</span>;

};

export default TypeColors;
