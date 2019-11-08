import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
    color: #000;
    width: 200px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0 1px 6px -2px gray;
    transition: transform 0.2s ease-in;

    &:hover {
        transform: translate(-5px) scale(1.2);
        box-shadow: 5px 8px 5px #1e90ff;
    }
`

const StarWarsCard = props => {
    console.log(props);
    return (
        <CharacterCard>
            <h1>Character name: {props.name}</h1>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </CharacterCard>
    );
};

export default StarWarsCard;