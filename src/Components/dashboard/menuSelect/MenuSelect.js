import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuSelectCamp from './MenuSelectCamp';
import AlertPopUp from '../TypeOfAlerts/TypeOfAlerts';
import Dash from '../DashboardFullView/DashboardFullView.js';
// import Logo from '../../../assets/img/tplogomini.png';
import Cookies from 'universal-cookie'
import LoadingView from '../../Loading/Loading'
import FetchFunction from '../../Api-Call/Api-call-function';

/*
    1. apiNombres
    2. apiPaises
    3. apiGetUsers
*/
export default function SwipeableTemporaryDrawer() {

    // let idSS
    let cookies = new Cookies()
    const [idSS, setIdSS] = useState("") 
    const [campaanaSS, setCampanaSS] = useState("") 
    const usernameSS = FetchFunction('apiVerifiPermisoUsuario',idSS)
    const [cargoData, setCargoDataLog] = useState(false)
    const [estadoConta, setEstadoConta] = useState(0)

    const timeActual = new Date();
    const timeInicial = new Date();
    const acumularTime = timeActual - timeInicial;
    

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
                window.location.href ="/CAS/index"
            }
            else
            {            
                // let TokenEncr = md5(cookies.get('user_token'))
                // let userEncriptado = sessionStorage.getItem('encriptado')
                if
                (
                    sessionStorage.length === 0 || 
                    cookies.get('user_token') === '' || 
                    usernameSS.data.datos[0] === 'nodata' ||
                    idSS === ''
                )
                {
                    alert("Sin permisos, inicie sesión")
                    sessionStorage.clear();
                    cookies.remove('user_token')
                    window.location.href = "/CAS/index"
                }
                else
                {
                    setCargoDataLog (true)
                    if(!usernameSS.loading)
                    {
                        accesoACampanas = usernameSS.data.datos[4].split(",")
                        setEstadoConta(1)
                    }
                }
            }
        }
    }, [usernameSS.loading, idSS])

    const classes = useStyles();
    const [state, setState] = useState({
        left: false,
        
    });
    let accesoACampanas = []
    const [campanaSelected, setCampanaSelected] = useState("")
   
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
        className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
           <AlertPopUp/>

        </div>
    );
    const cerrarSesion =()=>
    {
        let cookie = new Cookies()
        sessionStorage.clear()
        cookie.remove('bearer')
    }
    var username = FetchFunction('apiVerifiPermisoUsuario',idSS)
    if(idSS === null || username === undefined)
    {
        const cookies = new Cookies() 
        cookies.remove('user_token')
        sessionStorage.clear()
        window.location.replace("/");
    }
    else
    {
        return (usernameSS.loading ? '...': !cargoData ? <LoadingView/> :
        
            <div style = {{marginTop : "-1%"}}>
                <div style={styles.header}>
                    
                    <div style = {styles.centro}>
                        <img style = {styles.logo} src="https://i.ibb.co/CtDcQ1v/tplogomini.png"/> 
                        <h1 className = "textoGrande" >Dashboard</h1>

                    </div>   
                    <div style = {{    
                            display: 'flex', 
                            justifyContent: 'center',
                            width: '22%',
                            backgroundColor: 'white'}}>
                        <a href="/CAS/index" onClick={() => cerrarSesion()}>
                            <button className="buttonNuevo"
                                style = {{    width: '10vw'}}
                                type = "button"
                            > Cerrar sesión
                            </button>
                        </a>
                      
                    </div>
                    <MenuSelectCamp campanaSelected = {campanaSelected} setCampanaSelected = {setCampanaSelected}/>     
                    


                </div>

                
            <Dash campanaSelected = {campanaSelected} setCampanaSelected = {setCampanaSelected} />
            
            </div>

        );
        }
    }
const styles = {
    cuerpo:{
        display : 'flex',
        flexDirection : 'column',
        // flex : 1,
    },
    header:{
        width : '100%',
        display : 'flex',
        justifyContent: 'space-between',
        alignItems : 'center',         
    },
    centro:{
        width : '100%',
        display : 'flex',
        justifyContent: 'center',
        alignItems : 'center', 
        marginTop : '0.5%',
        marginLeft: '28.3%'

    },
    logo:{
        width : 30, 
        height : 30,
    }
}

const useStyles = makeStyles({
    list: {
        width: '100%',
        // revisar que no pise codigo
    },
    
    fullList: {
        width: 'auto',
    },

    buttonInfo:{
        height : '10%',
        width : '10%'
    },

    header : 
    {
        display: 'flex',
        flexDirection: 'column',
    },

    body : 
    {
        display: 'flex',
        justifyContent: 'center',
        flexDirection : 'column',
        width : '100%',
        height : '100vh',
    },

    container : 
    {
        display: 'flex',
        width: '100%',
        alignItems : 'center',        
    }
});