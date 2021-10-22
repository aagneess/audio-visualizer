import LoginCallback from "../Spotify/LoginCallback.js";
window.onSpotifyWebPlaybackSDKReady = () => {};
import React, { Component, Fragment } from "react";

export default class Connection extends Component {
  state = {
    userDeviceId: null,
    userAccessToken: null,

    playerLoaded: false,
    playerSelected: false,
    playerState: null,
  };

  componentWillMount() {
    LoginCallback({
      onSuccessfulAuthorization: this.onSuccessfulAuthorization.bind(this),
      onAccessTokenExpiration: this.onAccessTokenExpiration.bind(this),
    });
  }

  onSuccessfulAuthorization(accessToken) {
    this.setState({
      userAccessToken: accessToken,
    });
  }

  onAccessTokenExpiration() {
    this.setState({
      userDeviceId: null,
      userAccessToken: null,
      playerLoaded: false,
      playerSelected: false,
      playerState: null,
    });

    console.error("The user access token has expired.");
  }
  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}
