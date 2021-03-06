import "./App.css";
import React from "react";
import axios from "axios";

import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  // Url variable
  const url = "https://tunatunr-backend.herokuapp.com";

  // States
  const [songs, setSongs] = React.useState([]);
  const [favoritedSong, setFavoritedSong] = React.useState([]);

  // Empty API
  const emptySong = {
    name: "",
    album: "",
    artist: "",
    time: "",
  };

  // Function to get list of songs
  const getSongs = () => {
    axios.get(url + "/songs").then((response) => {
      setSongs(response.data);
    });
  };

  const handleCreate = (song) => {
    axios.post(url + "/songs", song).then(() => {
      getSongs();
    });
  };

  const handleDelete = (song) => {
    axios.delete(url + "/songs/" + song.id).then(() => {
      getSongs();
    });
  };

  const handleFavorite = (song) => {
    if(!favoritedSong.includes(song)){
      setFavoritedSong([...favoritedSong, song]);
    }
    console.log(favoritedSong)
  };

  React.useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className="App">
      <Display
        songs={songs}
        handleDelete={handleDelete}
        handleFavorite={handleFavorite}
        favoritedSong={favoritedSong}
      />
      <Form
        song={emptySong}
        handleSubmit={handleCreate}
        favoritedSong={favoritedSong}
      />
    </div>
  );
}

export default App;
