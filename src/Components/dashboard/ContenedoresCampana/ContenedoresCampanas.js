import React from 'react';
// import Img from '../../../assets/img/LogoCampana/bancolombia.jpg';



export default function InfoCampa(props) {

    return(
        <a onClick = {() => props.setCampanaSelected(props.nombre)} >
            <div className="panelInfoCamp" >
                <div className = "contCirculoFotoCamp">
                    <div className = "circuloImgInfoCamp">
                        <div style = {styles.image}></div>
                    </div>
                </div>

                <div className = "contTextoCamp">
                    <p className = "textos" style ={{marginBottom : '0rem',     marginLeft: 0}} >
                        {props.nombre}
                    </p>
                </div>
            </div>
        </a>
        
    );
}
const styles = {
    image : 
    {
        width : '100%',
        backgroundImage : 'url(https://i.ibb.co/n0sVQNQ/bancolombia.jpg)',
        backgroundSize : 'cover', 
        borderRadius : 300,       
    }
}
