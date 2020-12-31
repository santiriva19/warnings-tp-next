// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ModalLogin from '../src/Components/login/modal-login';
// import Dashboard from '../src/Components/dashboard/DashboardFullView/DashboardFullView';
// import Registro from '../src/Components/dashboard/Registros/Registros';
// import RegistroUnique from '../src/Components/dashboard/Registros/RegistroUnique';
// import menuSelect from '../src/Components/dashboard/menuSelect/MenuSelect';
// import Coordinadores from '../src/Components/dashboard/Menus/CoordinadoresMenu';
// import Agentes from '../src/Components/dashboard/Menus/agentesMenu';
// import Error404 from '../src/Components/Error-404/404';


function App() {
  // var usernameEncriptado = sessionStorage.getItem('encriptado')
  // var pathToDashboard = "/dashboard/"+usernameEncriptado
  // var pathToRegistro = '/registro/'+usernameEncriptado
  // var pathToRegistroUnique = '/registro/'+usernameEncriptado+'/:id'
  return (
      <ModalLogin/>
      // <Router>
      //   <Switch>
      //     {/* <Route path='/login' component={ModalLogin}/>
      //     <Route exact path= '/registro/' component={Registro}/>
      //     <Route exact path= '/registro/:id' component={RegistroUnique}/>
      //     <Route exact path= {pathToDashboard}  component={menuSelect}/>
      //     <Route exact path='/Coordinadores' component={Coordinadores}/>
      //     <Route exact path='/agentes' component={Agentes}/> */}
      //     <Route component={error404} />
      //   </Switch>
      

      // </Router>
  );
}

export default App;