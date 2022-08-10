import ReactPlayer from "react-player";
import { React, useState } from "react";

export default function FullPlayer() {
  const [state, setState] = useState({
    isPlaying: false,
    isSeeking: false,
    played: 0,
  });

  const handleIsPlaying = () => {
    setState({ ...state, isPlaying: !state.isPlaying });
  };
  const handleSeekMouseDown = (e) => {
    setState({ ...state, isSeeking: true });
  };

  const handleSeekChange = (e) => {
    setState({ ...state, played: parseFloat(e.target.value) });
  };

  const handleSeekMouseUp = (e) => {
    setState({ ...state, isSeeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  const ref = (player) => {
    this.player = player;
  };

  return (
    <div>
      <ReactPlayer
        ref={ref}
        className="react__player"
        url="https://www.youtube.com/watch?v=wp43OdtAAkM"
        playing={state.isPlaying}
        loop={true}
        played={state.played}
        controls={false}
      />
      <div className="controls">
        <div className="play__button" onClick={handleIsPlaying}>
          {state.isPlaying ? "pause" : "play"}
        </div>
        <input
          className="seek__control"
          type="range"
          min={0}
          max={0.999999}
          step="any"
          value={state.played}
          onMouseDown={handleSeekMouseDown}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp}
        />
      </div>
    </div>
  );
}
