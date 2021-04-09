import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
        faHome
} from '@fortawesome/free-solid-svg-icons';
import FetchFunction from '../../Api-Call/Api-call-function';
import LoadingView from '../../Loading/Loading'
import Cookies from 'universal-cookie'
import md5 from 'md5'


/*
    1. apiNombres
    2. apiPaises
    3. apiGetUsers
*/
export default function Agentestable() {
    let cookies = new Cookies();
    const [idSS, setIdSS] = useState("") 
    const [campaanaSS, setCampanaSS] = useState("") 
    const { data, loading} = FetchFunction('apiGetCoordina', campaanaSS);
    const usernameSS = FetchFunction('apiVerifiPermisoUsuario',idSS)
    const [cargoDataLog, setCargoDataLog] = useState(false)
    const [ items ] = useState([
        {
            label: "Activo",
            value: "Activo"
        },
        {
            label: "No Activo",
            value: "No Activo" 
        },
        {
            label: "Vacaciones",
            value: "Vacaciones" 
        }
    ]);

    useEffect(() => 
    {
        setIdSS(sessionStorage.getItem('ccms'))
        setCampanaSS(sessionStorage.getItem('camapana'))
        if(!usernameSS.loading)
        {
            if(cookies.get("user_token") === undefined)
            {
                alert("Sin permisos, inicie sesión")
                sessionStorage.clear();
                cookies.remove('user_token')
                window.location.href ="/CWS/index"
            }
            else
            {            
                let TokenEncr = md5(cookies.get('user_token'))
                let userEncriptado = sessionStorage.getItem('encriptado')
                if
                (
                    sessionStorage.length === 0 || 
                    cookies.get('user_token') === '' || 
                    TokenEncr !== userEncriptado || 
                    usernameSS.data.datos[0] === 'nodata' ||
                    sessionStorage.getItem("ccms") === ''
                )
                {
                    alert("Sin permisos, inicie sesión")
                    sessionStorage.clear();
                    cookies.remove('user_token')
                    window.location.href("/CWS/index")
                }
                else
                {
                    setCargoDataLog (true)

                }
            }
        }
    }, [usernameSS.loading, idSS])

    
        return  (
            loading ? <LoadingView/> : !cargoDataLog ? <LoadingView/> :
            <div>
                <div style = {{display : 'flex', flexDirection : 'row', justifyContent : 'space-between', marginTop : '1%', paddingRight : '6%'}} >
                        <h2 style = {{marginLeft: '4%'}}>Coordinadores</h2>
                        <a  href = {'/CWS/dashboard'}
                            style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <button
                            className="dashboardBtns"
                            >
                            <FontAwesomeIcon 
                                icon = {faHome} 
                                size="1x"
                                color="white"
                            /> 
                            Volver
                            </button>
                        </a>
                        
                    </div>
                    <div
                    style= {{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                    >
                    <table className={'colab' ? 'greyGridTable' : 'display: none' }>
                        <thead>
                            <tr>
                                <th>CCMS</th>
                                <th>Usuario red</th>
                                <th>Nombre</th>
                                <th>Operación</th>
                                <th>Rol</th>
                                <th>Correo</th>
                            </tr>
                        </thead>
                    <tbody>

                        { loading ? 'Cargando' : data.map(index => (
                                <tr>
                                    <td>
                                        { index.ccms}
                                    </td>
                                    <td>
                                        { index.usuario_red}
                                    </td>
                                    <td>
                                        {index.nombre}
                                    </td>
                                    <td>
                                        {index.operacion}
                                    </td>
                                    <td>
                                        {index.rol}
                                    </td>
                                    <td>
                                        {index.correo}
                                    </td>
                                </tr>
                            ))} 
                        </tbody>
                    </table>
                </div>
                
            </div>   
        )
        
}