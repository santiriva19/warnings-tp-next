import React, { useState } from 'react';


function VerFotosButton(props) 
{
  // const [mostrar, setMostrar] = useState(props.mostrar)
  const variar = () => {
    if(props.mostrar)
    {
        // var container = document.getElementById('verFotosDiv');
        // container.style.display = 'flex';
        props.setMostrar(!props.mostrar)
    }
    else if(!props.mostrar)
    {
      // var container = document.getElementById('verFotosDiv');
      // container.style.display = 'none';
      props.setMostrar(!props.mostrar)
      props.setTodasFotos(props.todasFotos)
    }
   
  }
  return (
      <div>
     
        <button className = "verFotobtn" onClick = {variar} >Ver fotos</button>

      </div>
    )
    

}
export default VerFotosButton