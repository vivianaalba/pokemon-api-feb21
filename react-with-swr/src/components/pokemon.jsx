import React from 'react';
import useRequest from '../hooks/useRequest';

export default function Pokemon ({pokemon}) {
    const { name } = pokemon;
    const { data, error } = useRequest('/pokemon/${name}');

    if (!data) return <h2>Loading...</h2>

    if (error) return <div>{error}: There was an error with getting data</div>;


    return (
        <div>
            {data && (
                <div>
                    <span>#{data.id}</span>
                    <img
                        src={data.sprites.front_default}
                        alt={name}
                    />
                    <h2>{name}</h2>
                    <span>
                        <h3>
                            <i>Type</i>
                        </h3>
                        <ul>
                            {data.types.map((pokemon) => (
                                <li key={pokemon.type.name}>
                                    {pokemon.type.name.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                    </span>
                </div>
            )}
        </div>
    );
    
}
