import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import FetchFunction from '../../Api-Call/Api-call-function';


export default function NumEmpleado(props) {

    const {data, loading, arrayNombresImg} = FetchFunction("apiGetUsers",props.campanaSelected)

    return( loading ?  
    <div className="panelNumEmple">

        <FontAwesomeIcon icon={faUser} size="3x" color="#8F2A92" />
        <p className = "tituloAlerReci">Empleados</p>
        <div >
            <p className = "valorAlerReci" >...</p>
        </div>
    </div>
    
    :
        <div className="panelNumEmple">

            <FontAwesomeIcon icon={faUser} size="3x" color="#8F2A92" />
            <p className = "tituloAlerReci">Empleados</p>
            <div >
                <p className = "valorAlerReci" >{data.length}</p>
            </div>
        </div>
    );
}