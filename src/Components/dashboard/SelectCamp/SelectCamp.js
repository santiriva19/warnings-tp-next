import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function SelectCamp(props)
{    
    return(
        <div className="panelBotonCampaign">
            <div className = "contTextSideBar">
                <p className="textoSideBarCamp">{props.titulo}</p>
            </div>

            <div className = "contIconSideBar">
                <FontAwesomeIcon className="iconMenuCamp" icon={faBars} size="1x" color="#6E6E6E" />
            </div>
        </div>
    );
} 