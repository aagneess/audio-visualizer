import React, { Component } from "react";

export default class NowPlaying extends Component {
  render() {
    let { playerState } = this.props;
    let {
      name: track_name,
      artists: [{ name: artist_name }],
    } = playerState.track_window.current_track;

    return (
      <div className="music-player">
        <span>
          {track_name} | {artist_name}
        </span>
      </div>
    );
  }
}
