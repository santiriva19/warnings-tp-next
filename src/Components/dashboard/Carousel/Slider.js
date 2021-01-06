import React, { useEffect, useState } from 'react';
import Carousel from 'nuka-carousel';
import LoadingView from '../../Loading/Loading'
import axios from 'axios'
import Cookies from 'universal-cookie'

 function Slider(props) 
{
  const cookies = new Cookies() 
  let token = cookies.get('user_token')            

  const variar = () =>
  {
    props.setMostrar(false)
  }
  let split = props.todasFotos.split(',')
  const [arrayImagesRoute, setArrayImagesRoute] = useState([])
  const [cargo, setCargo] = useState(true)

  var images = []

  useEffect(()=>{
    let arrayHelper = []

    split.map((s)=>{
      const dir = `http://10.151.233.152:3555/node/video/api/get-file2/${s}`
      const ax = axios.post(dir, {
                    headers: {'user_token': token}, 
                    body : 
                    {
                      key : "holabri"
                    }
                  })
      
      arrayHelper.push(ax)
    })
    
    if(cargo){
      doAxios(arrayHelper)
    }
  })

  const doAxios = (direccion) => {
    axios.all(direccion).then(axios.spread((...responses) => {
      for(var i=0; i<direccion.length; i++){
        images.push(responses[i].data)
        if(i === direccion.length-1)
        {
          const response = fetch( 'http://10.151.233.152:3555/node/video/api/update/' );
          if(response.status === 204)
            {
              console.log('Error 204')
            }
            else
            {
                try
                {
                  console.log("Se eliminó")
                } 
                catch(err)
                {
                    console.log(err)
                }
                
            }
          }
        
          
      }
    }))
    .catch(errors => {
      console.log(errors)
    })
    .finally(()=>{
      if(cargo){
        setArrayImagesRoute(images)
        setCargo(false)
      }
    })

          
      }
  


  if(arrayImagesRoute !== []){
    return (  cargo ? <LoadingView/> :
        <div>
          <div
          className = "verFotosDiv"
          id = 'verFotosDiv'
          >
            <a style = {{color : "white", fontSize:42, textAlign : 'right', marginLeft: '81%', fontFamily: 'Quicksand', fontWeight: 600}} onClick = {variar} >x</a>

            <Carousel
              style={{
                height: '70%',
                width: '80%',
                borderRadius : 15
              }}
            >
              {arrayImagesRoute.map(img=>{
                return <img src={img}/>
              })}
            </Carousel>

        </div>
      </div>
    )
  }
  else{
    return null
  }
    

}
export default Slider