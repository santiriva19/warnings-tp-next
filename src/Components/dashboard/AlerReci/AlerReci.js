import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';



import FetchFunction from '../../Api-Call/Api-call-function';

/*
    1. apiNombres
    2. apiPaises
    3. apiGetUsers
*/ 

export default function NumEmpleado(props) 
{
    const {data, loading, arrayNombresImg} = FetchFunction('apiRegistros', props.campanaSelected);

    return ( loading ?  
        <div className="panelNumAlerReci">
            <FontAwesomeIcon icon={faExclamationTriangle} size="3x" color="#8F2A92" />
            <div>
                <p className = "tituloAlerReci">Alertas totales</p>
            </div>
            <p className = "valorAlerReci">...</p>
        </div>    
        
        :

        data[0].id === -100 ? 
        <div className="panelNumAlerReci">
            <FontAwesomeIcon icon={faExclamationTriangle} size="3x" color="#8F2A92" />
            <div > 
                <p className = "tituloAlerReci">Alertas totales</p>
            </div>
            <p className = "valorAlerReci">{0}</p>
        </div>

:
        <div className="panelNumAlerReci">
            <FontAwesomeIcon icon={faExclamationTriangle} size="3x" color="#8F2A92" />
            <div > 
                <p className = "tituloAlerReci">Alertas totales</p>
            </div>
            <p className = "valorAlerReci">{data.length}</p>
        </div>
    );
}