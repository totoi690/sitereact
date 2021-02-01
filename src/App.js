import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Menu from "./Páginas/menu"
import Perguntas from "./Páginas/perguntas"

class App extends React.Component {
 render() {
   return( 
   <Router basename={process.env.PUBLIC_URL}>
      <Switch>
          <Route exact path="/">
            <Redirect to="/menu" />
          </Route>
          <Route path='/perguntas' component={Perguntas} />
          <Route path='/menu' component={Menu} />
      </Switch>
  </Router>)
 }
}

export default App;
