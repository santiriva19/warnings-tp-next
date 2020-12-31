import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



export default function BotoncoordinaEstado()
{
    return(
        <div className="panelBotonCampaign">
            <div className = "contTextSideBar">
                <p className="textoSideBarCamp3">Coordinadores</p>
            </div>

            <div className = "contIconSideBar">
                <FontAwesomeIcon className="iconMenuCamp" icon={''} size="1x" color="#6E6E6E" />
            </div>
        </div>
    );
}