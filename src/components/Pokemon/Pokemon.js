import React, { useEffect, useState } from 'react';
import styles from "./Pokemon.module.css"
import { Link } from "react-router-dom";

function Pokemon({id, number, name}) {
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

    return (
        <ul key={id} >

            <li>
                No: {number}
            </li>
            <li>
                Name: {name}
            </li>
            <img src={imgUrl + parseInt(number) + ".png"} alt={name.toLowerCase()} className={styles.img} />
    
        </ul>
    );
}
export default Pokemon;