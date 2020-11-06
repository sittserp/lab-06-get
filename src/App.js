
import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Fetch from './Fetch.js';
import Create from './Create.js';
import Detail from './Detail.js';
import Home from './Home.js';
import Header from './Header.js';

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Fetch {...routerProps} />
              }
            />

            <Route
              path="/home"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/create"
              exact
              render={(routerProps) => <Create {...routerProps} />}
            />
            <Route
              path="/detail/:id"
              exact
              render={(routerProps) => <Detail {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}



