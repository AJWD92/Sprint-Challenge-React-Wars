import React, { useState, useEffect } from 'react';
import StarWarsCard from './StarWarsCard';
import axios from 'axios';

export default function StarWarsList() {
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        axios.get('https://swapi.co/api/people').then(response => {
            console.log(response);
            setCharacters(response.data.results);
        }).catch(error => {
            console.log('Sorry these are not the droids you are looking for', error);
        });
    }, []);
    return (
        <div>
            {characters.map((character) => {
                return <StarWarsCard key={character.name} name={character.name} gender={character.gender} height={character.height} mass={character.mass} />
            })}
        </div>
    )
}