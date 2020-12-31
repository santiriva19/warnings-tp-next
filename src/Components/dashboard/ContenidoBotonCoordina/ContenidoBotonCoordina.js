import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import BotonCoordinaEstado from '../BotonCoordinaEstado/BotonCoordinaEstado.js'
import Coordiandores from '../Coordinadores/Coordinadores'
import '../ContenidoBotonCoordina/ContenidoBotonCoordina'



const useStyles = makeStyles({
    root :{
        width : '100%',
        height : '100%',
    },
    list: {
        width: '100%',
    },
    fullList: {
        width: 'auto',
        height : '82vh'
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

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    
  });

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
                <p className= "tituloSelectCampCoordina" >Aquí puede ver información y actualizar los estados de los coordiandores de la campaña Grupo Bancolombia</p>
               
                <div className="ConteneColumnCoordinadores">

                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    <Coordiandores nombre="Santiago" apellido="Rivadeneira" />
                    

                </div>
          </div>
        
          <div className = "contCamps">
             
          </div>
      </div>
      
      
    </div>
  );

  return (
    <div style = {{width : '38vw'}} >
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button style = {{width : '100%', borderRadius : 300, marginTop : '3%'}} onClick={toggleDrawer(anchor, true)}>                   
                        <BotonCoordinaEstado/>                    
                    </Button>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
                </React.Fragment>                
            ))}
                  


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
        paddingLeft: '20%',
    },
    logo:{
        width : 30, 
        height : 30,
    }
}
