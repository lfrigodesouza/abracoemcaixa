import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Detalhes from './pages/Detalhes';
import AuthProvider from './contexts/AuthContext';
import PrivateRoute from './routers/PrivateRoute';
import Catalogo from './pages/Catalogo';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route exact path="/autenticacao" component={Auth} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/detalhes/:box" component={Detalhes} />
        <Route path="/catalogo" component={Catalogo} />
        <Route path="/" component={Home} />
      </Switch>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
