import React, { useState } from 'react';
import { getCharacters } from '../api/characters-api'; // recup des perso

const Compare2CharactersPage = () => {
    document.title = "Compare 2 | Marvel App";

    const characters = getCharacters(); 
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
    }));

    const [option1, setOption1] = useState(options[0]);
    const [option2, setOption2] = useState(options[1]);

    const selectedCharacters = [characters[option1.value], characters[option2.value]];

    return (
        <div>
            <h2>Comparez deux personnages</h2>
            <div>
                <select
                    data-testid="select-character-1"
                    value={option1.value}
                    onChange={(e) => setOption1(options[e.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <span> vs </span>
                <select
                    data-testid="select-character-2"
                    value={option2.value}
                    onChange={(e) => setOption2(options[e.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Caractéristique</th>
                        <th>{selectedCharacters[0].name}</th>
                        <th>{selectedCharacters[1].name}</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(selectedCharacters[0]).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{selectedCharacters[0][key]}</td>
                            <td>{selectedCharacters[1][key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Compare2CharactersPage;
