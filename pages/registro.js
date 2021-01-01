
import { useRouter } from 'next/router'
import  Registro from '../src/Components/dashboard/Registros/Registros'
import  RegistroUni from '../src/Components/dashboard/Registros/RegistroUnique'

export default function Home() 
{
  const router = useRouter()
  const {id} = router.query

  if(id === undefined)
  {
    return(
    
      <Registro/>
     )
  }
  else
  {
    return(     
    <RegistroUni/>
    )
  }

}
