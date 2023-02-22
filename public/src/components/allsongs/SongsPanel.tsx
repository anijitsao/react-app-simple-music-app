import { useEffect, useState } from "react";

// components
import Song from "./Song";
import SearchBar from "./SearchBar";
import { SongType } from "../types/songTypes";

type SongsPanelProps = {
  songs: SongType[];
  changeRating: (id: string, rating: number) => void;
};

const SongsPanel = (props: SongsPanelProps) => {
  // Initialize the initial state and its modifier function
  const [songData, setSongData] = useState({
    songs: [],
    emptyMessage: "List of the songs is populated...",
  });

  useEffect(() => {
    setSongData({ ...songData, songs: props.songs });
  }, [props.songs.length]);

  // modify the list of songs based on searched text
  const modifySongs = (searchText: string) => {
    let toBeSearchedSongs = [...props.songs];
    const searchValue = searchText.toLowerCase();

    // if the user is searching something only then
    if (searchValue != "") {
      toBeSearchedSongs = toBeSearchedSongs.filter((song) => {
        let songAttrs = `${song.name}, ${song.genre.join(
          ", "
        )}, ${song.singers.join(", ")}, ${song.album}`;
        songAttrs = songAttrs.toLowerCase();
        return songAttrs.includes(searchValue);
      });
    }

    // set the state variable accordingly
    setSongData({
      ...songData,
      songs: toBeSearchedSongs,
      emptyMessage:
        toBeSearchedSongs.length == 0
          ? "Not found try with something else"
          : songData.emptyMessage,
    });
  };

  const { songs, emptyMessage } = songData;
  const { changeRating } = props;

  return (
    <section className="show-songs">
      <SearchBar modifySongs={modifySongs} />

      <article className="song-list">
        {songs.length > 0
          ? songs.map((song) => {
              return (
                <Song
                  key={song._id}
                  song={...song}
                  changeRating={changeRating}
                />
              );
            })
          : emptyMessage}
      </article>
    </section>
  );
};

export default SongsPanel;
