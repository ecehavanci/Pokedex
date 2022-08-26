import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from "react-router-dom";

function SpecificPokemon() {

    const [data, setData] = useState();
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    let params = useParams();

    useEffect(() => {
        const url = 'https://huzjga0b0d.execute-api.eu-central-1.amazonaws.com/v1/pokemon/' + params.name;
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setDataIsLoaded(true);
            });
    }, []);



    return (
        <>
            {dataIsLoaded ? (
                <div className="SpecificPokemon">
                    <ol key={data.Number} >{
                        <div>
                            <table cellPadding={"7px"}>
                                <tr>
                                    <td>Name</td>
                                    <td>{data.Name}</td>
                                </tr>
                                <tr>
                                    <td>Classification</td>
                                    <td>{data.Classification}</td>
                                </tr>
                                <tr>
                                    <td>Fast Attacks</td>
                                    <td>{
                                        data["Fast Attack(s)"].toString()
                                    }</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>{data.Height}</td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>{data.Weight}</td>
                                </tr>
                                <tr>
                                    <td>Special Attacks</td>
                                    <td>{
                                        data[
                                            "Special Attack(s)"].toString()
                                    }</td>
                                </tr>
                            </table>
                        </div>
                    }
                    </ol>

                </div>


            ) : (
                <div><h1> Please wait some time.... </h1> </div>
            )}
        </>
    );
}



export default SpecificPokemon;
