import { Dashboard } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie'

function FetchFunction( descripcion, id = null )
{ 

    let apiGetUsers
    let apiGetCoordina
    let apiRegistrosOpercaicones
    let apiRegistrosUnique
    let apiVerifiPermisoUsuario
    let apiEliminaFotos

    if(descripcion !== "")
    {
        apiGetUsers = 'http://10.151.233.152:3555/node/video/api/get-users/'; 
        apiGetCoordina = 'http://10.151.233.152:3555/node/video/api/get-rev-op/'; 
        apiRegistrosOpercaicones = 'http://10.151.233.152:3555/node/video/api/get-aler/';
        apiRegistrosUnique = 'http://10.151.233.152:3555/node/video/api/get-aler-id/';
        apiVerifiPermisoUsuario = 'http://10.151.233.152:3555/node/video/api/get-rev/';
        apiEliminaFotos = 'http://10.151.233.152:3555/node/video/api/update/';
    }
    const [ data, setData ] = useState(null);
    const [ arrayNombresImg, setImg ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const cookies = new Cookies() 
    var url = '';
    switch(descripcion)
    {
        default:
        break;
        case 'apiGetUsers' : 
            url = apiGetUsers+id
            // console.log(url+ " from case")
        break;
        case 'apiGetCoordina' : 
            url = apiGetCoordina+id
            // console.log(url+ " from case")
        break;
        case 'apiRegistros' : 
            url = apiRegistrosOpercaicones+id
            // console.log(url+ " from case")
        break;
        case 'apiRegistrosUnique' : 
            url = apiRegistrosUnique+id
            // console.log(url+ " from case")
        break;
        case 'apiVerifiPermisoUsuario' : 
            url = apiVerifiPermisoUsuario+id
            // console.log(url+ " from case")
        break;
        case 'apiEliminaFotos' : 
            url = apiEliminaFotos
            // console.log(url+ " from case")
        break;
      
    }
 
    useEffect(() => {
        async function fetchData( url ) {
            let token = cookies.get('user_token')            
            // console.log(token)

            const requestOptions = {
                headers: { 'user_token': cookies.get('user_token')  },
            };

            const response = await fetch( url , requestOptions );
            if(response.status === 204)
            {
                 console.log('Error 204')
            }
            else
            {
                try
                {
                    const dataApi = await response.json();
                    // console.log(dataApi)
                    if(descripcion === 'apiRegistrosUnique')
                    {
                        // const [ item ] = dataApi;
                        setData( dataApi );
                        setImg(dataApi[0].nombre_imagenes.split(","))
                        setLoading(false)
                    }
                    else
                    {
                        // const [ item ] = dataApi;
                        setData( dataApi );
                        setLoading(false)
                    }
                } 
                catch(err)
                {
                    console.log(err)
                }
                
            }
        }
        fetchData( url );
    }, [url]);

    // if(data === undefined)
    // {
    //     alert("No existen datos en esta sección")
    //     window.location.replace(pathToDashboard)
    // }
    // else
    // {
        if(descripcion === 'apiRegistrosUnique' || descripcion === 'apiRegistros')
        {
            return {data, loading, arrayNombresImg} 

        }
        else
        {
            return {data, loading} 

        }
    // }
}

export default FetchFunction

