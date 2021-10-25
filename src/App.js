import React from 'react';
import ConnectionScreen from './screens/ConnectionScreen.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Animation Pages
import Animation1 from './animations/Animation1';
import Animation2 from './animations/Animation2';

import './App.css';

function App() {
  return [
    <div className="App">
      <ConnectionScreen />
    </div>,
    <Router>
      <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Animation1">1</Link>
          </li>
          <li className="nav-item">
            <Link to="Animation2">2</Link>
          </li>
        </ul>
      </nav>

      <div className="Anim">
        <Switch>
          <Route path="/Animation1">
            <Animation1 />
          </Route>
          <Route path="/Animation2">
            <Animation2 />
          </Route>
        </Switch>
      </div>
    </Router>,
  ];
}

export default App;
