import React from 'react';
import heroes from './heroes.json';
import  './HeroesList.css';

const HeroesList = ({ publisher }) => {
    const filteredHeroes = heroes.filter(hero => hero.publisher === publisher);

    return (
        <div>
            <h1>Lista de Héroes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Superhéroe</th>
                        <th>Editorial</th>
                        <th>Alter Ego</th>
                        <th>Primera Aparición</th>
                        <th>Personajes</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredHeroes.map((hero, index) => (
                        <tr key={index}>
                            <td>{hero.superhero}</td>
                            <td>{hero.publisher}</td>
                            <td>{hero.alter_ego}</td>
                            <td>{hero.first_appearance}</td>
                            <td>{hero.characters}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HeroesList;
