import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './componets/Home/Home';
import Barra from './componets/Barra/Barra'
import Games from './componets/Games/Games';
import GamePage from './componets/GamePage/GamePage';
import CrearJuego from './componets/CrearJuego/CrearJuego';
import Error404 from './componets/Error404/Error404';
import Exito from './componets/Exito/Exito';
import Delete from './componets/Delete/Delete';
function App() {
  return (

    <div className="App">
      <Barra />

    <Switch>
        <Route exact path='/' component={Home}  />
        <Route exact path='/games' component={Games}  />
        <Route exact path='/game/:id' component={GamePage}  />
        <Route  exact path='/crearjuego/' component={CrearJuego}  />
        <Route  exact path='/exito' component={Exito}  />
        <Route  exact path='/successdelete' component={Delete}  />

        <Route    component={Error404}  />


    </Switch>

    </div>
  );
}

export default App;
