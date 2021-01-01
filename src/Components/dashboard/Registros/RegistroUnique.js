import React, { useState, useEffect } from 'react';
import FetchFunction from '../../Api-Call/Api-call-function';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
        faHome
} from '@fortawesome/free-solid-svg-icons';
import LoadingView from '../../Loading/Loading'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'
import Slider from '../Carousel/Slider';
import VerFotosButton from '../Carousel/verFotosButton';
import ComboBoxTA from './comboBoxTA'
import md5 from 'md5'



/*
    1. apiNombres
    2. apiPaises
    3. apiGetUsers
    4. apiRegistros
*/

function RegistroUnique()
{
    const styles = {
        ppTable : 
        {
            display: 'flex',
            justifyContent: 'center',
            margin: 20
        },
    }
    var dataFromApi;
    var dataFromApiPost;
    let cookies = new Cookies();
    let idSS = sessionStorage.getItem('ccms')

    const router = useRouter();
    const {id} = router.query
    const {data, loading, arrayNombresImg} = FetchFunction('apiRegistrosUnique', id)

    let RegExp = /[0-9]/ 

    const [ items ] = useState([
        {
            label: "Por definir",
            value: "Por definir"
        },
        {
            label: "Justificada",
            value: "Justificada"
        },
        {
            label: "No Justificada",
            value: "No Justificada" 
        },
        {
            label: "Falso Positivo",
            value: "Falso Positivo"
        }
    ]);
    const [mostrar, setMostrar] = useState(false)
    const [todasFotos, setTodasFotos] = useState('')
    const usernameSS = FetchFunction('apiVerifiPermisoUsuario',idSS)
    const [cargoDataLog, setCargoDataLog] = useState(false)


    let index = loading ? [] : data[0]
    var dataFromApiPost = null
    let currentPathAsked = '/registro/'+id
    useEffect(() => 
    {
        if(sessionStorage.length === 0 && cookies.get('user_token') === undefined)
        {
            sessionStorage.setItem("link", currentPathAsked)

        }
        if(!usernameSS.loading)
        {
            if(cookies.get("user_token") === undefined || sessionStorage.length === 0  || cookies.length === 0 || sessionStorage.getItem("ccms") === undefined )
            {
                sessionStorage.clear();
                cookies.remove('user_token')
                sessionStorage.setItem("link", currentPathAsked)
                alert('Será redirigido al login')

                window.location.href ="/"

            }
            else
            {        
                sessionStorage.removeItem("link")    
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
                    sessionStorage.clear();
                    cookies.remove('user_token')
                    sessionStorage.setItem("link", currentPathAsked)
                    alert('Será redirigido al login')
                    window.location.href("/")

                }
                else
                {
                    setCargoDataLog (true)

                }
            }
        }
    }, [usernameSS.loading, idSS])

    const renderModal = () => {
        if(mostrar === true && todasFotos !== ''){
            return( 
                <Slider mostrar = {mostrar} setMostrar = {setMostrar} todasFotos = {todasFotos}/>
            )
        }
        else{
            return null
        }
    }
       

    
        return ( !cargoDataLog ? <LoadingView/> :  loading ? <LoadingView/> :
            <div>
                {renderModal()}
                <div className='registros'>
                    <div style = {{display : 'flex', flexDirection : 'row', justifyContent : 'space-between', marginTop : '1%', paddingRight : '6%'}} >
                            <h2>Registros</h2>
                            <a  href = '/dashboard/'
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
                    <hr />
                </div>
                <div>
                    <label 
                        disabled="disabled"
                        style={{marginLeft:"50px"}}
                    > 
                        Filtrar por: 
                    </label>
                    <div className="filterbtns" 
                        style = {{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            flexWrap: 'wrap'
                        }}    >

                        <input disabled="disabled" className="filterbtnsinput" type="date" name="name" placeholder="Fecha" color="white" />
                        <select disabled="disabled" >

                            <option value="" disabled selected>
                                Tipo de Alerta
                            </option>
                        </select>
                        {/* <select >
                            <option disabled selected>
                                Coordinadores
                            </option>
                        </select> POR SI TRAEN COORDINADORES*/}
                        <input 
                            className = "inputCcms"
                            placeholder = "Buscar por CCMS" 
                            type = "text" 
                            id="customInputFilter"
                            disabled="disabled"
                        />
                    </div>
                </div>
                <div style ={styles.ppTable} >
                    <table className='Registros'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CCMS</th>
                            <th>Usuario</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Objeto</th>
                            <th>Operación</th>
                            <th>Tpo de Alerta</th>
                            <th>Anexos</th>
                        </tr>
                    </thead>
                    <tbody>

                            <tr>
                                <td>{index.id}</td>
                                <td>{index.ccms}</td>
                                <td>{index.usuario_red}</td>
                                <td>{index.fecha}</td>
                                <td>{index.hora}</td>
                                <td>{index.objeto}</td>
                                <td>{index.operacion}</td>
                                <td>

                                <ComboBoxTA item = {index.tipo_alerta} id = {index.id}/> 

                                </td>
                                <td>
                                    <VerFotosButton 
                                        mostrar = {mostrar} 
                                        setMostrar={setMostrar} 
                                        todasFotos = {index.nombre_imagenes}
                                        setTodasFotos = {setTodasFotos}/>

                                        <img src = {dataFromApiPost}/>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
                <a  href = {'/dashboard/'+sessionStorage.getItem('encriptado')}
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                   
                </a>
            </div>
        )

   
}
export default RegistroUnique