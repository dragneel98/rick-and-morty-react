import React, {useEffect, useState} from 'react';
import Character from './character';

function ButtonPage (props) {
    
    return(
        <div className='navPage'>
            <p> page:{props.page} </p>
            <div className='buttons'>
                <button className= {props.page>1 ? "button1" : "button-hidden"} onClick={() => props.setPage(props.page - 1)}>previous</button>
                <button className='button2' onClick={() => props.setPage(props.page + 1)}>next</button>
            </div>
        </div>
    )
}

const CharacterList = () => {

    //request
    const [characters, setCharacters] = useState([]);
    //pagina
    const [page, setPage] = useState(1);

    useEffect(() => {
       async function fetchRequest() {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        //transformo la data en un json
        const data = await response.json()
        setCharacters(data.results)
       }
       fetchRequest()
    }, [page]);
    return (
        <div>
            <ButtonPage page={page} setPage={setPage}></ButtonPage>
            <div className='character-list'> 
            { characters.map((character) => {
                    return (
                        
                        <Character key={character.id} character={character}></Character>
                        
                    )
                })}
            </div>
            <ButtonPage page={page} setPage={setPage}></ButtonPage>
        </div>
    );
}

export default CharacterList;
