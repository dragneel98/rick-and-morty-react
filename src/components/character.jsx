import React from 'react';

const Character = ({ character }) => {
    return (
        <div className='character-container'>
            <h2> {character.name} </h2>
            <img className='character-img' src={character.image} alt={character.name}></img>
            <div>
                <p className='info'> status : <span className= {character.status="alive" ? "alive" : "dead" }>{character.status}</span> </p>
                <p className='info'> specie :<span> {character.species} </span></p>
                <p className='info'> location :<span> {character.location.name} </span></p>
                <p className='info'> origin :<span> {character.origin.name} </span> </p>
            </div>

        </div>
    );
}

export default Character;
