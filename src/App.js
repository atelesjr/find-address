import React, { useState } from 'react';
import axios from 'axios';
import './styles/css/main.css';
import { cpfMask } from './util/cpfMaks';

import Form from './components/Form';
import ShowAddress from './components/ShowAddress';


const APIKey = 'AIzaSyC4GatwY4tdnGNxGXREv2diHovCu-Doet8'

export default function App() {

  const [ cep, setCep ] = useState("");
  const [ foundCep, setFoundCep ] = useState({});
  const [ coordinates, setCoordinates ] = useState({});
 
  //To search for CEP basic information
  const searchCep = async () => {
    setFoundCep({});
    setCoordinates({});

    if(cep){
      const cepMasked = cpfMask(cep)
      try {
        const resp = await axios.get(`http://viacep.com.br/ws/${ cepMasked }/json`);
        setFoundCep(resp.data);
        findCoordinates(cepMasked);
      } catch(error) {
        alert('CEP não encontrado', error);
      };
    } else {
      alert('Digite um CEP válido.')
    }
  };

  // to find in google maps CEP location
  const findCoordinates = async (cep) => {
    try{
      const coord = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${APIKey}`)
      setCoordinates(coord.data.results[0].geometry.location);
      setCep('');
    } catch(error) {
      alert('Esse CEP não existe');
      console.error('findCoordinates error: ', error);
    };
  }


  return (
    <div className="container">

      <h1 className="header__title">Consultar de endereço</h1>

      <Form  
        searchCep={ searchCep } 
        cep={ cep } 
        changeCep={ setCep } 
      />

      { 
        coordinates.lat 
        ? <ShowAddress 
            foundCep={foundCep}
            coordinates={coordinates}
          />
        : null
      }

    </div>
  );
};