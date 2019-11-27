import React from 'react'

import GoogleMaps from './googleMaps'


export default ({ foundCep, coordinates }) => {
    const { logradouro, bairro, localidade, uf, cep } = foundCep;
    return (
        <div className="maps">
            <div className="maps__header">
            <h2 className="maps__header-address">{ logradouro }</h2>
                <p>{ bairro }</p>
                <p>{ localidade } - { uf }</p>
                <p>{ cep }</p> 
            </div>
            <div className="maps__gmaps">    
                <GoogleMaps coordinates={coordinates} />
            </div>
            <span className="maps__close"></span>
        </div>
    );
};