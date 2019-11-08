import React, { useState, useEffect } from 'react';
import StarWarsCard from './StarWarsCard';
import axios from 'axios';
import styled from 'styled-components';

const MainDiv = styled.div`
    display: flex;
    // flex-direction: column;
    max-width: 100%
    margin: 0 5%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

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
        <MainDiv>
            {characters.map((character) => {
                return <StarWarsCard key={character.name} name={character.name} gender={character.gender} height={character.height} mass={character.mass} />
            })}
        </MainDiv>
    )
}