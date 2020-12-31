import React, { useState, useEffect } from 'react';
import FetchFunction from '../../Api-Call/Api-call-function';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
        faHome
} from '@fortawesome/free-solid-svg-icons';
import LoadingView from '../../Loading/Loading'
import Cookies from 'universal-cookie'
import Slider from '../Carousel/Slider';
import VerFotosButton from '../Carousel/verFotosButton';
import ComboBoxTA from './comboBoxTA';
import md5 from 'md5';




/*
    1. apiNombres
    2. apiPaises
    3. apiGetUsers
    4. apiRegistros
*/

function  Registro () {
    // var campaanaSS
    const [idSS, setIdSS] = useState("") 
    const [campaanaSS, setCampanaSS] = useState("") 
    const usernameSS = FetchFunction('apiVerifiPermisoUsuario',idSS)

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
                window.location.href ="/"
            }
            else
            {            
                let TokenEncr = md5(cookies.get('user_token'))
                let userEncriptado = sessionStorage.getItem('encriptado')
                if
                (
                    sessionStorage.length === 0 || 
                    cookies.get('user_token') === '' || 
                    usernameSS.data.datos[0] === 'nodata' ||
                    sessionStorage.getItem("ccms") === ''
                )
                {
                    alert("Sin permisos, inicie sesión")
                    sessionStorage.clear();
                    cookies.remove('user_token')
                    window.location.href = "/"
                }
                else
                {
                    setCargoDataLog (true)

                }
            }
        }
    }, [usernameSS.loading, idSS])
    var dataFromApi;
    let cookies = new Cookies();
    const [cargoDataLog, setCargoDataLog] = useState(false)

    const styles = {
        ppTable : 
        {
            display: 'flex',
            justifyContent: 'center',
            margin: 20
        },
    }

    const [ items ] = useState([
        
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
        },
        {
            label: "Por definir",
            value: "Por definir"
        }
    ]);
    
    const {data, loading, arrayNombresImg} = FetchFunction('apiRegistros', campaanaSS)
    
    const [mostrar, setMostrar] = useState(false)
    const [todasFotos, setTodasFotos] = useState('')
    const [alertVar, setAlert] = useState(["Tipo de alerta","Justificada", "No justificada", "Falso positivo", "Por definir"]);
    const [date, setDate] = useState('');
    const [tipoDeAlertaBool, setTipoDeAlertaBool] = useState(false)
    const [tipoAlerta, setTipoAlerta] = useState("")
    const [ccms, setCcms] = useState('')
    const [ccmsBool, setCcmsBool] = useState(false)
    const [conta, setConta] = useState(0)
    const {tipoAlertaValue, setAlertaValue} = useState('')
    const addAlertType = alertVar.map(addAlertType => addAlertType);


    dataFromApi = loading ? [] : data
    
    const renderModal = () => {
        if(mostrar === true && todasFotos !== ''){
            if(arrayNombresImg !== [])
            {
                // const {dataPost, loadingPost} = FetchFunction_POST('apiImages', arrayNombresImg[0], loading)
                // dataFromApiPost = loadingPost ? '' : dataPost;
                // loadingFromApiPost = !loadingPost ? true : loadingPost;
            }
            return( 
                <Slider mostrar = {mostrar} setMostrar = {setMostrar} todasFotos = {todasFotos}/>
            )
        }
        else{
            return null
        }
    }

    
    const alertTypeChange = (e) => {
        if(alertVar[e.target.value] !== "Tipo de alerta")
        {
            setDate("")
            setTipoDeAlertaBool(true)
            setTipoAlerta(alertVar[e.target.value])
        }
        else
        {
            setTipoDeAlertaBool(false)
        }
    }
    

  
        return ( loading ? <LoadingView/> : !cargoDataLog ? <LoadingView/> :
            <div>
                
                {renderModal()}
                
                <div className='registros'>
                    <div style = {{display : 'flex', flexDirection : 'row', justifyContent : 'space-between', marginTop : '1%', paddingRight : '6%'}} >
                        <h2>Registros</h2>
                        <a  href = {'/dashboard/'}
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

                            <input 
                                style = {{backgroundColor : '#68006bbc'}}
                                className="filterbtnsinput" 
                                value="Quitar filtros"
                                onClick={ () =>{ 
                                    setDate(""); 
                                    setTipoDeAlertaBool(false); 
                                    document.getElementById("comboBoxTipoAler").value = 0
                                    setCcmsBool(false);
                                    document.getElementById('customInputFilter').value = ""
                                    setCcms("")
                                    
                                    }
                                } 
                                type="submit" 
                                name="name" 
                                placeholder="Fecha" 
                                color="white" 
                            />                                   
                            <input 
                                className="filterbtnsinput" 
                                value={date}
                                onChange={e => {
                                    setDate(e.target.value); 
                                    document.getElementById("comboBoxTipoAler").value = 0;
                                    setCcmsBool(false);
                                    }
                                }
                                
                                
                                type="date" 
                                name="name" 
                                placeholder="Fecha" 
                                color="white" 
                            />                                   
                        

                            <select 
                                id = "comboBoxTipoAler"
                                onChange={(e) => alertTypeChange(e)}
                            >
                                {
                                    addAlertType.map((newAlert, key) => <option key={key} value={key}>{newAlert}</option>)
                                }
                            </select>

                            <input 
                                className = "inputCcms"
                                placeholder = "Buscar por CCMS" 
                                type = "text" 
                                id="customInputFilter"
                                value={ccms}
                                autocomplete="off"
                                onChange={e => {
                                    setCcms(e.target.value);
                                    setTipoDeAlertaBool(false)
                                    setDate("")
                                    setConta(conta+1)
                                    
                                }}
                            
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
                            {dataFromApi.map(index => {
                                if(date !== '' && !tipoDeAlertaBool && ccms === "")
                                {
                                    if(date === index.fecha)
                                    {
                                        return(
                                            <tr>
                                                <td>{index.id}</td>
                                                <td>{index.ccms}</td>
                                                <td>{index.usuario_red}</td>
                                                <td>{index.fecha}</td>
                                                <td>{index.hora}</td>
                                                <td>{index.objeto}</td>
                                                <td>{index.operacion}</td>
                                                <td>
                                                    <ComboBoxTA item = {index.tipo_alerta} id = {index.id} /> 

                                                </td>

                                                <td>
                                                    <VerFotosButton 
                                                        mostrar = {mostrar} 
                                                        setMostrar={setMostrar} 
                                                        todasFotos = {index.nombre_imagenes}
                                                        setTodasFotos = {setTodasFotos}/>

                                                </td>
                                            </tr>
                                        )
                                    }
                                }
                                else if(date === '' && !tipoDeAlertaBool && ccms === "")
                                {
                                
                                    return(
                                        <tr>
                                            <td>{index.id}</td>
                                            <td>{index.ccms}</td>
                                            <td>{index.usuario_red}</td>
                                            <td>{index.fecha}</td>
                                            <td>{index.hora}</td>
                                            <td>{index.objeto}</td>
                                            <td>{index.operacion}</td>
                                            <td>

                                            <ComboBoxTA item = {index.tipo_alerta} id = {index.id} /> 
                                            
                                            </td>
                                            <td>
                                                <VerFotosButton 
                                                    mostrar = {mostrar} 
                                                    setMostrar={setMostrar} 
                                                    todasFotos = {index.nombre_imagenes}
                                                    setTodasFotos = {setTodasFotos}/>

                                            </td>
                                        

                                        </tr>
                                    )
                                }
                                else if(tipoDeAlertaBool && date === '' && ccms === "")
                                {
                                    if(index.tipo_alerta === tipoAlerta)
                                    {

                                        return(
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

                                                </td>
                                            </tr>
                                        )
                                    }
                                }
                                else if(ccms !== ""  && date === '' && !tipoDeAlertaBool)
                                {
                                    if(ccms === index.ccms+"")
                                    {

                                        return(
                                            <tr>
                                                <td>{index.id}</td>
                                                <td>{index.ccms}</td>
                                                <td>{index.usuario_red}</td>
                                                <td>{index.fecha}</td>
                                                <td>{index.hora}</td>
                                                <td>{index.objeto}</td>
                                                <td>{index.operacion}</td>
                                                <td>
                                                    
                                                    <ComboBoxTA item = {index.tipo_alerta} id = {index.id} /> 

                                                </td>
                                                <td>
                                                    <VerFotosButton 
                                                        mostrar = {mostrar} 
                                                        setMostrar={setMostrar} 
                                                        todasFotos = {index.nombre_imagenes}
                                                        setTodasFotos = {setTodasFotos}/>
        
                                                </td>
                                            </tr>
                                        )
                                    }
                                }
                            }
                        )}
                            
                            

                        </tbody>
                    </table>
                </div>
                <a  href = {'/dashboard/'}
                    style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    
                </a>
            </div>    
        )   
    
            
}

export default Registro
