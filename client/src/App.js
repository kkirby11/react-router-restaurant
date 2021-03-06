import React, {Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import Menus from './components/Menus'
import About from './components/About';
import Menu from './components/Menu';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <ProtectedRoute exact path="/menus" component={Menus} />
      <ProtectedRoute exact path="/menus/:id" component={Menu} />

      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;
