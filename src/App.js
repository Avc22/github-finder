import './App.css';
import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar title="Github Finder" />
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound}/>
            </Switch>
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
