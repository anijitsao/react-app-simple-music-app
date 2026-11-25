import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import SongsPanel from "./allsongs/SongsPanel";
import TopFivePanel from "./topfive/TopFivePanel";
import NavBar from "./layout/NavBar";

// Constants
import Constants from "./Constants";

// css
import "../css/musicPanel.css";

const MusicPanel = () => {
  // Initialize initial state and its modifier function
  const [musicData, setMusicData] = useState({
    songs: [],
  });

  // initialize all the constants
  const allConstants = Constants();

  // get all the songs from back end
  useEffect(() => {
    getSongs();
  }, []);

  // get all the songs from back end
  const getSongs = async () => {
    let url = allConstants.getSongs;
    try {
      let responseReceived = await fetch(url, {
        method: allConstants.method.GET,
        headers: allConstants.header,
      });
      let res = await responseReceived.json();
      setMusicData({ ...musicData, songs: res });
    } catch (err) {
      console.log("Error occurred...", err);
    }
  };

  // change the rating of an song
  const changeRating = (id: string, rating: number) => {
    const newSongs = [...musicData.songs];

    // put the rating in appropriate place
    newSongs.forEach((ele, index, arr) => {
      if (ele._id == id) {
        arr[index].rating = rating;
      }
    });
    setMusicData({ ...musicData, songs: newSongs });
    modifySong(id, rating);
  };

  // modify the song by API call
  const modifySong = async (id: string, rating: number) => {
    let url = allConstants.updateRating
      .replace("{id}", id)
      .replace("{rating}", rating.toString());
    try {
      await fetch(url, {
        method: allConstants.method.PUT,
        headers: allConstants.header,
      });
    } catch (err) {
      console.log("Some Error occurred during the update", err);
    }
  };

  const { songs } = musicData;

  return (
    <Router>
      <section className="music-panel">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<SongsPanel songs={songs} changeRating={changeRating} />}
          />

          <Route path="/topfive" element={<TopFivePanel songs={songs} />} />
        </Routes>
      </section>
    </Router>
  );
};

export default MusicPanel;
