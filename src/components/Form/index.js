import React from 'react';
import { cpfMask } from '../../util/cpfMaks';

export default function Form ({ cep, changeCep, searchCep }){
    return(
        <div  className="header__form">
            <p className="header__form-text">Consultar</p>
            <div role="form" className="header__form-group">
                <label className="header__form-group-label">CEP</label>
                
                <input 
                    type='text'
                    maxLength='9' 
                    id="search"
                    placeholder="CEP"
                    value={ cpfMask(cep) } 
                    onChange={ evt => changeCep(evt.target.value) }
                    className="header__form-group-input" 
                />
            
                <button 
                    type="button" 
                    onClick={ evt => searchCep(evt.target.value) } 
                    className="header__form-group-btn"
                >
                    Buscar
                </button>
            </div>
        </div>

    );
};

