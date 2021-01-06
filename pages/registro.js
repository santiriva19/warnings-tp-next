
import { useRouter } from 'next/router'
import  Registro from '../src/Components/dashboard/Registros/Registros'
import  RegistroUni from '../src/Components/dashboard/Registros/RegistroUnique'
import Crono from '../src/Components/dashboard/Cronometro/Crono'

export default function Home() 
{
  const router = useRouter()
  const {id} = router.query

  if(id === undefined)
  {
    return(
      <>
        <Crono/>
        <Registro/>
      </>
      
     )
  }
  else
  {
    return(  
      <>
        <Crono/>   
        <RegistroUni/>
      </>
      
    )
  }

}
