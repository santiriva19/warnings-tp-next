import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import SelectCamp from '../SelectCamp/SelectCamp';
import './MenuSelect.scss';
import Campana from '../ContenedoresCampana/ContenedoresCampanas';
import FetchFunction from '../../Api-Call/Api-call-function'



const useStyles = makeStyles({
    root :{
        width : '100%'
    },
    list: {
        width: '100%',
    },
    fullList: {
        width: 'auto',
    },
    buttonInfo:{
        height : '10%',
        width : '80%'
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
        width : '22vw',
        height : '100vh',
    },
    container : 
    {
        display: 'flex',
        width: '100%',
        alignItems : 'center',        
    }
});

export default function SwipeableTemporaryDrawer(props) {


  let idSS = sessionStorage.getItem('ccms')
  const [accesoACampanas, setAccesoACampanas] = useState([])
  const usernameSS = FetchFunction('apiVerifiPermisoUsuario',idSS)
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  useEffect
  (() => {
      if(!usernameSS.loading)
      {
          setAccesoACampanas(usernameSS.data.datos[4].split(","))
      }
  }
  ,[usernameSS.loading])

 

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
    >
      
      <div className = "contenedorSelectCamp" >
          <div className ="contTiulAndInput" >
                <p className= "tituloSelectCamp" >Seleccione la campaña que desee analizar</p>

                {/* <div className="contCustomInputSelectCamp" >
                    <FontAwesomeIcon style = {{marginLeft : '3%'}} icon={faSearch} className = "iconBoxes" size="2x" color="#9A9A9A" />
                    <input placeholder = "Buscar campaña" type = "text" className="customInputSelectCamp"  />
                </div> */}
          </div>
        
          <div className = "contCamps">
              
              {accesoACampanas.map(index => {
                return( usernameSS.loading ? '...' : <Campana nombre = {index} campanaSelected = {props.campanaSelected} setCampanaSelected = {props.setCampanaSelected} />)
              })}

                 
          </div>
      </div>
      
      
    </div>
  );

  return ( usernameSS.loading ?   
    <Button style = {{width : '40%', borderRadius : 300, marginTop : '3%'}}>                   
      <SelectCamp titulo = {'Cargando campañas...'}/>                    
    </Button> 
    :
    <div style = {{width : '41vw',     paddingRight: '2%'}} >
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button style = {{width : '100%', borderRadius : 300, marginTop : '3%'}} onClick={toggleDrawer(anchor, true)}>                   
                        <SelectCamp titulo = {'Buscar campañas'}/>                    
                    </Button>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                    onClick = {toggleDrawer(anchor,false)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
                </React.Fragment>                
            ))}
    </div>
  );
}
