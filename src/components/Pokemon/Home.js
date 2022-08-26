import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon.js';
import { Link, Outlet } from "react-router-dom";

function Home() {

    const [allPokemons, setAllPokemons] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(true);

    useEffect(() => {
        fetch(
            "https://huzjga0b0d.execute-api.eu-central-1.amazonaws.com/v1/pokemons?limit=5&offset=10")
            .then((res) => res.json())
            .then((json) => {
                setAllPokemons(json);
                setDataIsLoaded(true);
            });
    }, []);


    return (
        <>
            {dataIsLoaded ? (
                <div className="App">
                    <h1> Pokedex </h1>
                    <ol key={allPokemons.id} >{
                        allPokemons.map((pokemon) => (
                            <div>
                                <Pokemon id={pokemon.id} name={pokemon.Name} number={pokemon.Number}></Pokemon>
                                <Link to={`/pokemon/${pokemon.Name}`}>See Details</Link>
                            </div>

                        ))
                    }
                    </ol>

                </div>


            ) : (
                <div><h1> Please wait some time.... </h1> </div>
            )}
        </>
    );
}

export default Home;

