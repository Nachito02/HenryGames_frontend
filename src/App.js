import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './componets/Home/Home';
import Barra from './componets/Barra/Barra'
import Games from './componets/Games/Games';
import GamePage from './componets/GamePage/GamePage';
import CrearJuego from './componets/CrearJuego/CrearJuego';
function App() {
  return (
    <div className="App">
      <Barra />

    <Switch>
        <Route exact path='/' component={Home}  />
        <Route exact path='/games' component={Games}  />
        <Route  path='/game/:id' component={GamePage}  />
        <Route  path='/crearjuego/' component={CrearJuego}  />


    </Switch>

    </div>
  );
}

export default App;
