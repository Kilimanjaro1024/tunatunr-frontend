import React from "react";

const Display = (props) => {
  console.log("Display Props", props);
  console.log(props.favoritedSong)
  return (
    <div className="display-container">
      <div className="header-container">
        <h1 className="display-title">
          <span className="tuna">tuna.</span>tunr
        </h1>
        <p className="catch-phrase">
          "Drop the <span className="bass">bass"</span>
        </p>
      </div>
      <div className="playlist-container">
        <h2>
          <strong>Playlist</strong>
        </h2>
        {props.songs.map((song) => {
          return (
            <div className="song-container">
              <div className="song-title">
                <strong>{song.name}</strong>
              </div>
              <div className="artist">
                <strong>{song.artist}</strong>
              </div>
              <div className="song-album">
                <strong>{song.album}</strong>
              </div>
              <div className="song-time">
                <strong>{song.time}</strong>
              </div>
              <button
                className="song-favorite"
                onClick={() => props.handleFavorite(song)}
              >
                +
              </button>
              <button
                className="song-delete"
                onClick={() => props.handleDelete(song)}
              >
                X
              </button>
            </div>
          );
        })}

        <div className="favorite-container">
          Favorite Songs
          {props.favoritedSong.map((song) => {
            return (
              <div className="song-container">
                <div className="song-title">
                  <strong>{song.name}</strong>
                </div>
                <div className="artist">
                  <strong>{song.artist}</strong>
                </div>
                <div className="song-album">
                  <strong>{song.album}</strong>
                </div>
                <div className="song-time">
                  <strong>{song.time}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Display;
