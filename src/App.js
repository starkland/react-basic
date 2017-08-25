import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Header from './components/header';
import Main from './components/main';

import { updateCurrentGuy } from './reducers/guys';

import './App.css';

const App = (props) => (
  <div className="App">
    <Header />
    <Main guys={props.guys} />
  </div>
)

// withRouter to fix the react-router + redux issue
const routerConnected = withRouter(connect((state) => state, {updateCurrentGuy})(App))

export default routerConnected;