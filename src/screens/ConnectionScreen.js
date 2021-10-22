import React, { Component, Fragment } from "react";

import WebPlaybackReact from "../components/Spotify/WebPlaybackReact.js";
import LoginCallback from "../components/Spotify/LoginCallback.js";
import LoginScreen from "../screens/LoginScreen.js";
import NowPlayingScreen from "../screens/NowPlaying.js";

window.onSpotifyWebPlaybackSDKReady = () => {};

export default class ConnectionScreen extends Component {
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

    console.error("The user access token is expired.");
  }

  render() {
    let {
      userDeviceId,
      userAccessToken,
      playerLoaded,
      playerSelected,
      playerState,
    } = this.state;

    let webPlaybackSdkProps = {
      playerName: "Music Visualizer",
      playerInitialVolume: 1.0,
      playerRefreshRateMs: 100,
      playerAutoConnect: true,
      onPlayerRequestAccessToken: () => userAccessToken,
      onPlayerLoading: () => this.setState({ playerLoaded: true }),
      onPlayerWaitingForDevice: (data) =>
        this.setState({ playerSelected: false, userDeviceId: data.device_id }),
      onPlayerDeviceSelected: () => this.setState({ playerSelected: true }),
      onPlayerStateChange: (playerState) =>
        this.setState({ playerState: playerState }),
      onPlayerError: (playerError) => console.error(playerError),
    };

    return (
      <div className="Connection">
        <main>
          {!userAccessToken && <LoginScreen />}
          {userAccessToken && (
            <WebPlaybackReact {...webPlaybackSdkProps}>
              {playerLoaded && !playerSelected && (
                <Fragment>
                  <h2 className="action-orange">
                    Open Spotify and connect to device 'Music Visualizer'
                  </h2>
                </Fragment>
              )}

              {playerLoaded && playerSelected && playerState && (
                <Fragment>
                  <NowPlayingScreen playerState={playerState} />
                </Fragment>
              )}
            </WebPlaybackReact>
          )}
        </main>
      </div>
    );
  }
}
