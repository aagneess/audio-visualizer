import React, { Component, Fragment } from "react";
import Login from "../components/Spotify/Login.js";

export default class LoginScreen extends Component {
  buttonClick(e) {
    e.preventDefault();
    Login.logInWithSpotify();
  }

  render() {
    return (
      <Fragment>
        <button className="btn btn-md btn-green" onClick={this.buttonClick}>
          Connect your Spotify Account
        </button>
      </Fragment>
    );
  }
}
