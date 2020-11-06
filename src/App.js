
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

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Fetch {...routerProps} />}
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