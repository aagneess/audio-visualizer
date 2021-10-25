import React from "react";
import ConnectionScreen from "./screens/ConnectionScreen.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "./App.css";

//Animation Pages
import Animation1 from "./animations/Animation1";
import Animation2 from "./animations/Animation2";

function App() {
  const handle = useFullScreenHandle();

  return [
    <div class="fullscreen-btn">
      <button onClick={handle.enter}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          class="bi bi-arrows-fullscreen"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
          />
        </svg>
      </button>
    </div>,
    <FullScreen handle={handle}>
      <header>
        <ConnectionScreen />
      </header>
      ,
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
      </Router>
      ,
    </FullScreen>,
  ];
}

export default App;
