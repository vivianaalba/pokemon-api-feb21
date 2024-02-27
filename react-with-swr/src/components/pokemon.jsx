import React from 'react';
import useRequest from '../hooks/useRequest';

export default function Pokemon ({pokemon}) {
    const { name } = pokemon;
    const { data, error } = useRequest('pokemon', name);

    if (!data)  return <h2>Loading...</h2>

    if (error) return <div>{error}: There was an error with getting data</div>;

    if (data) {
    return (
                <div className='card'>
                    <span className='card-id'>#{data.id}</span>
                    <img
                        className='card-sprite'
                        src={data.sprites.front_default}
                        alt={name}
                    />
                    <h2 className='card-name'>{name}</h2>
                    <span className='card-details'>
                        <h3>
                            <i>Type</i>
                        </h3>
                        <ul className='types-list'>
                            {data.types.map((pokemon) => (
                                <li key={pokemon.type.name}>
                                    {pokemon.type.name.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                    </span>
                </div>
    )
    }
    
}
