import React, {useEffect,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCalendarDay,
    faCalendarWeek,
    faCalendar,
    faUser,
    faUserTie,
    faInfoCircle,
 } from '@fortawesome/free-solid-svg-icons';
import InfoCampana from '../InfoCampa/InfoCampa';
import NumAlerta from '../NumAlerta/NumAlerta';
import GraficaAlertas from '../GraficaAlertas/GraficaAlertas';
import NumEmple from '../NumEmple/NumEmple';
import AlerReci from '../AlerReci/AlerReci';
import Boxes from '../Resultados/resultados';
import '../Registros/Registro.scss';
import GrafiAlertPolar from '../GraficaAlertsPolar/GraficaPolar.js';
import FetchFunction from '../../Api-Call/Api-call-function';
import LoadingView from '../../Loading/Loading'
import Cookies from 'universal-cookie';
import md5 from 'md5'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import AlertPopUp from '../TypeOfAlerts/TypeOfAlerts';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import '../../../assets/style.scss'
import Crono from '../Cronometro/Crono';

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

export default function DashboardFullView (props) 
{       
    // const [currentCampana, setCurrentCampana] = useState(props.campanaSelected)

    let idSS
    let userEncriptado

    const classes = useStyles();
    const [state, setState] = useState({
        left: false,
        
    });
    

    ////////////// CONTADORES GRAFICA ALER RECI

    const [contaAlerReci,setContaAlerReci] = useState(0)

    ///////////// CONTADORES GRAFICA ACUMULADO 2020 / POLAR
    let campana = ''
    var contadorBolsoVarGP = 0;
    var contadorBotellaVarGP = 0;
    var contadorLapiceroVarGP = 0;
    var contadorCompuVarGP = 0;
    var contadorCeluVarGP = 0;
    var contadorBooksVarGP = 0;
    var contadorUSBVar = 0;
    const [datosArrayGrafiPolar ,setDatosArrayGrafiPolar] = useState([])

    ///////////// CONTADORES GRAFICA ALERTA CONTADORES / DONA

    // const [contaBolsosGA,setContaBolsosGA] = useState(0)
    // const [contaBotellasGA,setContaBotellasGA] = useState(0)
    // const [contaLapicerosGA,setContaLapicerosGA] = useState(0)
    // const [contaCompuGA,setContaCompuGA] = useState(0)
    // const [contaCeluGA,setContaCeluGA] = useState(0)
    // const [contaBooksGA,setContaBooksGA] = useState(0)
    let percenBolso = 0;
    let percenBotella = 0;
    let percenLapicero = 0;
    let percenCompu = 0;
    let percenCelu = 0;
    let percenBook = 0;
    let percenUsb = 0;
    const [cargoInfoDash, setCargoInfoDash] = useState(true)    
    const {data, loading, arrayNombresImg} = FetchFunction('apiRegistros',props.campanaSelected);

    idSS = sessionStorage.getItem('ccms')

    const usernameSS = FetchFunction('apiVerifiPermisoUsuario',idSS)
    const getUsersApi = FetchFunction("apiGetUsers",props.campanaSelected)
    const [numeroEmpleados, setNumeroEmpleados] = useState(0)
    const [cargoDataLog, setCargoDataLog] = useState(false)

    /////////////////// VARIABLES DE BOTONES DE FECHAS
    let day = 1;
    let week = 7;
    let month = 90;
    const [timeState, setTimeState] = useState("day")
   
    ///////////// ACCESO A CAMPAÑAS


    useEffect(() => 
    {
        userEncriptado = sessionStorage.getItem('encriptado')
        // campana = props.campanaSelected
        if(!loading)
        {
            sessionStorage.setItem('camapana', props.campanaSelected)
            setDatosArrayGrafiPolar([contadorBolsoVarGP, contadorBotellaVarGP, contadorLapiceroVarGP,contadorCompuVarGP, contadorCeluVarGP, contadorBooksVarGP, contadorUSBVar])
            
            if(!usernameSS.loading)
            {
                if(cookies.get("user_token") === undefined)
                {
                    sessionStorage.clear();
                    cookies.remove('user_token')
                    window.location.href ="/CAS/index"
                }
                else
                {            
                    let TokenEncr = md5(cookies.get('user_token'))
                    
                    if
                    (
                        sessionStorage.length === 0 || 
                        cookies.get('user_token') === '' || 
                        TokenEncr !== userEncriptado || 
                        usernameSS.data.datos[0] === 'nodata' ||
                        idSS === ''
                    )
                    {
                        sessionStorage.clear();
                        cookies.remove('user_token')
                        window.location.href = "/CAS/index"
                    }
                    else
                    {
                        setCargoDataLog (true)
                        
                    }
                }
            }
        }
        if(!getUsersApi.loading)
        {
            // setNumeroEmpleados(getUsersApi.data)
        }
    }, [loading, usernameSS.loading, props.campanaSelected])

    let cookies = new Cookies()
    
    // numeroAlerReci()

    /*
        Bolso,
        Botella,
        Lapicero,
        Computador, 
        Celular,
        Libro o Cuaderno
    */

    const setTimeFunc = (timeType) =>
    {
        setTimeState(timeType)
    }
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
    
   
    return( !cargoInfoDash ? '...' : loading ? 
    <div style = {{display:'flex', justifyContent : 'center', alignItems : 'center', height : '83vh', fontSize: 24}} > 
        <p style = {{textAlign : 'center', fontWeight : 700}} >Selecciones una de sus campaña para comenzar ⭷</p>
    </div> 
    
    :
    
    getUsersApi.loading ? 
        
        <LoadingView/>
        
    : 

        <div style = {styles.cuerpo} >
            <Button>
                            <div className="menu">
                                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                                    rel="stylesheet"></link>
                                <input type="checkbox" id="toggle" style = {{border : '0px solid ', opacity: 0, borderStyle: 'hidden'}} />
                                <label id="show-menu" for="toggle">

                                <React.Fragment key={'left'}>
                                    <div className="btn" style = {{zIndex : 1000}} >
                                        <i className="material-icons md-36 toggleBtn menuBtn">menu</i>
                                        <i className="material-icons md-36 toggleBtn closeBtn">close</i>
                                    </div>
                                    <SwipeableDrawer
                                        anchor={'left'}
                                        open={state['left']}
                                        onClose={toggleDrawer('left', false)}
                                        onOpen={toggleDrawer('left', true)}
                                    >
                                        {list('left')}
                                    </SwipeableDrawer>
                                </React.Fragment>
                                
                                    
                                <React.Fragment key={'left'}>
                                    <div title="Información de la app" className="btn"  onClick = { toggleDrawer('left', true)}>
                                    <FontAwesomeIcon 
                                        icon={faInfoCircle} 
                                        className = "iconBoxes"  
                                        size="2x" color="#454545" 
                                    />
                                    </div>
                                    
                                    <SwipeableDrawer
                                        anchor={'left'}
                                        open={state['left']}
                                        onClose={toggleDrawer('left', false)}
                                        onOpen={toggleDrawer('left', true)}

                                    >
                                        {list('left')}
                                    </SwipeableDrawer>

                                </React.Fragment>
                                
                                <React.Fragment key={'left'}>
                                        <div title="Ver coordinadores" className="btn" >
                                            <a href = '/CAS/coordinadores'>

                                                <FontAwesomeIcon 
                                                    icon={faUserTie} 
                                                    className = "iconBoxes"  
                                                    size="2x" color="#454545" 
                                                />
                                            </a>
                                        </div>
                                    
                                    
                                    <SwipeableDrawer
                                            anchor={'left'}
                                            open={state['left']}
                                            onClose={toggleDrawer('left', false)}
                                            onOpen={toggleDrawer('left', true)}
                                        >
                                            {list('left')}
                                        </SwipeableDrawer>

                                </React.Fragment>
                                
                                <React.Fragment key={'left'}>
                                    <div title="Ver agentes" className="btn">
                                        <a href = '/CAS/agentes'>
                                            <div>
                                                <FontAwesomeIcon 
                                                    icon={faUser} 
                                                    className = "iconBoxes"  
                                                    size="2x" color="#454545" 
                                                    
                                                />
                                            </div>
                                        </a>
                                        
                                    </div>
                                    <SwipeableDrawer
                                        anchor={'left'}
                                        open={state['left']}
                                        onClose={toggleDrawer('left', false)}
                                        onOpen={toggleDrawer('left', true)}
                                    >
                                        {list('left')}
                                    </SwipeableDrawer>

                                </React.Fragment>
                                
                            
                                
                                
                                    
                                </label>
                            </div>
                        </Button>
               
            <p style = {{    
                textAlign: 'right',
                marginRight: '4%',
                marginTop: '1%',
                fontWeight: 700}} >Filtrar por los ultimos:</p>
            <div style={styles.timeFramebtns}>
                <a onClick= {() => {
                        setTimeFunc("day");  
                        document.getElementById("day").style.backgroundColor = '#979797' ;
                        document.getElementById("day").style.color = 'black'
                        document.getElementById("week").style.backgroundColor = '#c2c2c2' ;
                        document.getElementById("week").style.color = '#414141'
                        document.getElementById("month").style.backgroundColor = '#c2c2c2' ;
                        document.getElementById("month").style.color = '#414141'
                    
                    }}>
                    <button style = {{backgroundColor : '#979797', color : '#414141'}} id = "day" className = "timeBtns">
                        <FontAwesomeIcon 
                            icon = {faCalendarDay} 
                            size="1x"
                            color="#535353"
                        /> 
                        24 horas
                    </button>
                </a>
                <a onClick= {() => {
                        setTimeFunc("week");  
                        document.getElementById("day").style.backgroundColor = '#c2c2c2' ;
                        document.getElementById("day").style.color = '#414141'
                        document.getElementById("week").style.backgroundColor = '#979797' ;
                        document.getElementById("week").style.color = 'black'
                        document.getElementById("month").style.backgroundColor = '#c2c2c2' ;
                        document.getElementById("month").style.color = '#414141'
                    
                    }}>
                    <button id = "week" className = "timeBtns">
                        <FontAwesomeIcon 
                            icon = {faCalendarWeek} 
                            size="1x"
                            color="#535353"
                        />
                        7 días    
                    </button>
                </a>
                <a onClick= {() => {
                        setTimeFunc("month");  
                        document.getElementById("day").style.backgroundColor = '#c2c2c2' ;
                        document.getElementById("day").style.color = '#414141'
                        document.getElementById("week").style.backgroundColor = '#c2c2c2' ;
                        document.getElementById("week").style.color = '#414141'
                        document.getElementById("month").style.backgroundColor = '#979797' ;
                        document.getElementById("month").style.color = 'black'
                    
                    }}>
                    <button id = "month" className = "timeBtns">
                            <FontAwesomeIcon 
                                icon = {faCalendar} 
                                size="1x"
                                color="#535353"
                            />
                            30 días
                    </button>
                </a>
            </div>

            <div className="row" style = {styles.contColOneTwo} >

                {/*  Contenedor de resumen general - verde  */}
                <div className = "col firstCol">

                    {/*  Contenedor de resumen general - purpura  */}
                    <div className = "contPanelResum">
                        <GrafiAlertPolar 
                            campanaSelected = {props.campanaSelected} 
                        />
                    </div>

                    {/*  Contenedor de número de alertas - amarillo  */}
                    <div style = {styles.contPanelNumAlertas}>
                        <NumAlerta campanaSelected = {props.campanaSelected}/>
                    </div>
                </div>

                {/*  Contenedor de resumen general y gráfica - azul  */}
                <div className = "col" style = {styles.secondCol}>

                    {/*  Contenedor de resumen general - purpura  */}
                    <div style = {styles.contPanelInfoCamp}>
                        <InfoCampana nombre = {props.campanaSelected} />
                    </div>

                    <div style = {styles.contPaneGraphAndEmpAndlNum}>

                        <div style = {styles.contGraph}>
                            <GraficaAlertas time = {timeState} campanaSelected = {props.campanaSelected} />
                        </div>

                        <div style = {styles.contEmplAndNum}>

                            <NumEmple campanaSelected = {props.campanaSelected} />
                            {/* <NumEmple numero = {getUsersApi.data.length} loadingData = {getUsersApi.loading} /> */}
                            <AlerReci campanaSelected = {props.campanaSelected} />
                            {/* <AlerReci numero = {contaAlerReci} loadingData = {loading} /> */}

                        </div>
                        
                    </div>
                </div>
            </div>

            <div style={styles.registros}>
                <div style ={{marginLeft: '3%'}} >
                    <h2>Resultados</h2>
                    <hr />
                </div>
                <a href = '/CAS/registro' ><button style={styles.btnToRegistro}>
                    Registros
                </button>
                </a>
            </div>    
            <div className = "boxes">
                <div className="col">                   
                    <Boxes 
                        campanaSelected = {props.campanaSelected}

                    />
                </div>
            </div>
            

            {/* <div className='registros'>
                <h2 style = {{marginTop : '4%'}}>Alertas por coordinadores</h2>
                <hr />
            </div>   */}

            {/* <div style = {styles.contGrafiCoordina}>
                <GrafiCoordina/>
            </div> */}
        </div>
    );

}

const styles = {
    cuerpo:{
        display : 'flex',
        flexDirection : 'column',
        flex : 1,
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
        paddingLeft: '21%',
    },
    logo:{
        width : 30, 
        height : 30,
    },
    timeFramebtns : {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0% 2% 0 0'
    },
    
    btnToRegistro: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        border: 'none',
        color: 'white',
        background: '#8F2A92',
        margin: 5,
        borderRadius: 400,
        fontSize: '1em'
    },
    registros: {
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: '30px'
    },
    contColOneTwo: {
        width: '100%', 
        marginLeft : '-0.5',
        justifyContent: 'space-around',
        flexWrap : 'wrap',
        overFlowX: 'hidden',
    },
    secondCol: {
        flex : 0.63,
        height: '95vh', 
        width : '100%'
    },
    contPanelNumAlertas: {
        flex : 1,
        width : '104%',
        height: '40%', 
    },
    contPanelInfoCamp: {
        flex : 0.4,
        height: 138, 
        width: '104%',
        marginLeft: '-2%',
        paddingTop : '2%',
        justifyContent : 'center',
        alignItems : 'center',
    },
    contPaneGraphAndEmpAndlNum: {
        flex : 0.6,
        display:'flex',
        height: 411,
        width: '104%',
        marginLeft: '-1.6%',
        flexDirection : 'row',
        alignItems : 'center',
    },
    contGraph: {
        flex : 0.55,
        height : '100%',
        alignItems : 'center',
    },
    contEmplAndNum: {
        flex : 0.45,
        height : '100%',
    },
    contGrafiCoordina: {
        display : 'flex',
    }
}