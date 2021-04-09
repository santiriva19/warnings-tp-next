import React from 'react';
// import Img from '../../../assets/img/LogoCampana/bancolombia.jpg';

export default function InfoCampa(props) 
{
    return(
        <div className="panelInfo" >
            

            <div className = "contTexto">
                <p className = "textos" style ={{marginBottom : '0rem', marginLeft : '5%'}} >
                    Esta es la campaña de <strong style = {{color : '#8F2A92'}} >{props.nombre}</strong>, aquí puede tener
                    toda la información de alertas de primera mano
                </p>
            </div>
        </div>
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
