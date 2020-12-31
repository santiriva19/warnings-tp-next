import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'


function ComboBoxTA(props)
{
    const [tipoAlertaEstado, setTipoALertaEstado] = useState("")
    const [ items ] = useState([
        
        {
            label: "Justificada",
            value: 0
        },
        {
            label: "No justificada",
            value: 1 
        },
        {
            label: "Falso positivo",
            value: 2
        },
        {
            label: "Por definir",
            value: 3
        }
    ]);
    const [ dataPost, setDataPost ] = useState(null);
    const [ loadingPost, setLoadingPost ] = useState(true);
    
    const cookies = new Cookies();

    let token = cookies.get('user_token')            

    const ponerPost1 = (valor) =>
    {
        
        const url = "http://10.151.233.152:3555/node/video/api/update_aler/"
        axios.post( url ,{ 
            
              id : props.id+"",
              tipo_alerta : valor
            
            }, {headers : {'user_token' : token}}
            )
          .then( res => {
                    if(res.status === 204)
                    {
                        console.log('Error 204')
                    }
                    else
                    {
                        const dataApi = res.data;
                        setDataPost( dataApi );
                        alert("Se modificó la información correctamente, la página se refrescará...")
                        setLoadingPost(true)
                        window.location.reload()

                    }
                }
            )
        
    }
    const ponerPost2 = (valor) =>
    {
        
        const url = "http://10.151.233.152:3555/node/video/api/update_aler/"
        axios.post( url ,{ 
            
            id : props.id+"",
            tipo_alerta : valor
          
          }, {headers : {'user_token' : token}}
          )
          .then( res => {
                    if(res.status === 204)
                    {
                        console.log('Error 204')
                    }
                    else
                    {
                        const dataApi = res.data;
                        setDataPost( dataApi );
                        alert("Se modificó la información correctamente, la página se refrescará...")
                        setLoadingPost(true)
                        window.location.reload()

                    }
                }
            )
        
    }
    const ponerPost3 = (valor) =>
    {
        
        const url = "http://10.151.233.152:3555/node/video/api/update_aler/"
        axios.post( url ,{ 
            
            id : props.id+"",
            tipo_alerta : valor
          
          }, {headers : {'user_token' : token}}
          )
          .then( res => {
                    if(res.status === 204)
                    {
                        console.log('Error 204')
                    }
                    else
                    {
                        const dataApi = res.data;
                        setDataPost( dataApi );
                        alert("Se modificó la información correctamente, la página se refrescará...")
                        setLoadingPost(true)
                        window.location.reload()

                    }
                }
            )
        
    }
    const ponerPost4 = (valor) =>
    {
        const requestOptions = {
            headers : {
                'user_token' : token
            },
            body : {
                id : props.id+"",
                tipo_alerta : valor
            }
        }
        
        const url = "http://10.151.233.152:3555/node/video/api/update_aler/"
        axios.post( url ,{ 
            
            id : props.id+"",
            tipo_alerta : valor
          
          }, {headers : {'user_token' : token}}
          )
          .then( res => {
                    if(res.status === 204)
                    {
                        console.log('Error 204')
                    }
                    else
                    {
                        const dataApi = res.data;
                        setDataPost( dataApi );
                        alert("Se modificó la información correctamente, la página se refrescará...")
                        setLoadingPost(true)
                        window.location.reload()
                    }
                }
            )
        
    }
        return(
            <div>
            {items.map(item =>{
                    if(item.label === props.item)
                    {
                        if(props.item === "Justificada")
                        {
                            return (
                                <select id = "combo1" onChange = {e => ponerPost1(e.target.value)}>
                                    <option
                                        key={item.label}
                                        value={item.label}
                                        >
                                        {item.label}
                                    </option>
                                    <option
                                        key="No justificada"
                                        value="No justificada"
                                        >
                                        No justificada
                                    </option>
                                    <option
                                        key="Falso positivo"
                                        value="Falso positivo"
                                        >
                                        Falso positivo
                                    </option>
                                    <option
                                        key="Por definir"
                                        value="Por definir"
                                        >
                                        Por definir
                                    </option>
                                </select>

                            )
                        }
                        else if(props.item === "No justificada")
                        {
                            return (
                                <select id = "combo2" onChange = {e => ponerPost2(e.target.value)}>
                                    <option
                                        key={item.label}
                                        value={item.label}
                                        >
                                        {item.label}
                                    </option>
                                    <option
                                        key={"Justificada"}
                                        value={"Justificada"}
                                        >
                                        Justificada
                                    </option>
                                    <option
                                        key="Falso positivo"
                                        value="Falso positivo"
                                        >
                                        Falso positivo
                                    </option>
                                    <option
                                        key="Por definir"
                                        value="Por definir"
                                        >
                                        Por definir
                                    </option>
                                </select>

                            )
                        }
                        else if(props.item === "Falso positivo")
                        {
                            return (
                                <select id = "combo3" onChange = {e => ponerPost3(e.target.value)}>
                                    <option
                                        key={item.label}
                                        value={item.label}
                                        >
                                        {item.label}
                                    </option>
                                    <option
                                        key="No justificada"
                                        value="No justificada"
                                        >
                                        No justificada
                                    </option>
                                    <option
                                        key="Justificada"
                                        value="Justificada"
                                        >
                                        Justificada
                                    </option>
                                    <option
                                        key="Por definir"
                                        value="Por definir"
                                        >
                                        Por definir
                                    </option>
                                </select>

                            )
                        }
                        else if(props.item === "Por definir")
                        {
                            return (
                                <select id = "combo4" onChange = {e => ponerPost4(e.target.value)}>
                                    <option
                                        key={item.label}
                                        value={item.label}
                                        >
                                        {item.label}
                                    </option>
                                    <option
                                        key="No justificada"
                                        value="No justificada"
                                        >
                                        No justificada
                                    </option>
                                    <option
                                        key="Falso positivo"
                                        value="Falso positivo"
                                        >
                                        Falso positivo
                                    </option>
                                    <option
                                        key="Justificada"
                                        value="Justificada"
                                        >
                                        Justificada
                                    </option>
                                </select>

                            )
                        }
                    }
                } 
                
            )}
        </div>
        )
}
export default ComboBoxTA