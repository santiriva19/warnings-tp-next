import React, { useState, useEffect } from 'react';
// import Fondo from '../../assets/img/fondoInicio4.png';
// import Logo from 'https:/logini.blogs.es/6f44dd/google-2015-1/450_1000.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import md5 from 'md5'
import FetchFunction from '../Api-Call/Api-call-function';
import Cookies from 'universal-cookie';
import { ClearCacheProvider, useClearCacheCtx } from 'react-clear-cache';


export default function ModalLogin  () 
{
    const [eliminaDatosPrevios, setEliminaDatosP] = useState(false)
    const { isLatestVersion, emptyCacheStorage } = useClearCacheCtx();

    const cookies = new Cookies()
    
    useEffect( () => {
        cookies.remove("user_token");
        sessionStorage.removeItem("ccms")
        sessionStorage.removeItem("encriptado")
        sessionStorage.removeItem("tiempoDeEntrada")
        setEliminaDatosP(true)
    }, [] )

    // const [ ccms, setCcms ] = useState('rivadeneiradelgado.5');
    const [ ccms, setCcms ] = useState('');
    const [ pass, setPass ] = useState('');
    // const [ pass, setPass ] = useSta}te('craJ9yin');
    const {data,loading} = FetchFunction('apiVerifiPermisoUsuario', ccms)  



    // const [ pass, setPass ] = useState('');

    
    const handleSubmit = (evt) => 
    {
        let numeroDeError="";
        let tokenCifrado = '';
        evt.preventDefault();

        const credentials = {
            username: ccms,
            password:  pass, 
            typeAut : 3
        }
        axios.post('https://ccmsautomated.teleperformance.co/login',  credentials )
        .then(res => {
            console.log(res.data, "data")
            numeroDeError = res.data.error.codError+"";

            if(numeroDeError==="0")
            {   
                let token = "";
                var dataFromApi = null;
                dataFromApi = loading ? '' : data.datos;
                if(data.error === 'Invalid token')
                {
                    // console.log("Error en la conexión")
                }
                else
                {
                    token = loading ? "" : data.token

                }

                

                if(! (dataFromApi === undefined) || !(dataFromApi === 'nodata') && token !== "")
                {
                  
                    if(token ==="")
                    {
                        alert('Error en la conexión')
                    }
                    else
                    {
                        let tokenCifrado = md5(token)
                        sessionStorage.setItem('ccms', ccms)
                        sessionStorage.setItem("encriptado", tokenCifrado)
                        sessionStorage.setItem("tiempoDeEntrada", new Date().getTime())
                        cookies.set('user_token', token)
                        if(sessionStorage.getItem("link") === undefined || sessionStorage.length === 0 || sessionStorage.getItem("link") === null)
                        {
                            window.location.href = "/CWS/dashboard"
                        }
                        else
                        {
                            window.location.href = "/CWS/"+sessionStorage.getItem("link")
                        }
                        
                    }
                    
                }
                else
                {
                    alert("Lo sentimos no tiene permisos para acceder")
                }
            }
            else
            {
                alert("Contraseña o usuario incorrecto")
            }

        })
        .catch(error => {
            console.log(error)
        });

    }
    

    return(
        
        <div style ={styles.cuerpo}>
                {/* <img className="logoInicio" src = "https://i.ibb.co/CMcNDcz/fondo-Inicio4.png" /> */}

                <div 
                    className = "containerComplement" 
                    style={styles.container}
                >
                    <FontAwesomeIcon style = {{marginBottom : '4%'}} icon={faLock} size="3x" color="#8F2A92"/>
                    <h2 className = "textos" >Sólo personal autorizado</h2>
                    <input 
                        placeholder = "Username.5" 
                        type = "text" 
                        className="customInputs"
                        value = { ccms } 
                        onChange={e => setCcms(e.target.value)}
                    />
                    <input 
                        id='passText'
                        style = {{marginTop:'4%'}} 
                        placeholder = "Password" 
                        type = "password" 
                        value = { pass }
                        className="customInputs"
                        onChange={e => setPass(e.target.value)}
                    />    
                    <a>
                        <button 
                            className="customButtons"
                            onClick={handleSubmit}
                        >
                            Ingresar
                        </button>
                    </a>
                </div>
        </div>
    );
} 

const styles = {
    
    cuerpo : {
        display: 'flex',
        width : '100%',
        height : '100vh',
        backgroundImage : 'url(https://i.ibb.co/CMcNDcz/fondo-Inicio4.png)',
        backgroundSize : 'cover',
    },
    container : {
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor : '#EAEAEA',
    },
    customInputs: {
        fontFamily : 'quicksand', 
        textAlign : 'center',
    },
  }
