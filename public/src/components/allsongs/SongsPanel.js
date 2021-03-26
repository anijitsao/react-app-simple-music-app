import { useEffect, useState } from 'react';

// components
import Song from './Song'
import SearchBar from './SearchBar'

const SongsPanel = (props) => {

  // Initialize the initial state and its modifier function
  const [songData, setSongData] = useState(
    {
      songs: [],
      searchText: '',
      emptyMessage: 'List of the songs is populated...'
    })

  useEffect(() => {
    setSongData({ ...songData, songs: props.songs })
  }, [props.songs.length])

  const changeSearchText = (e) => {
    setSongData({ ...songData, searchText: e.target.value })
  }

  // when the X is pressed
  const clearSerchText = () => {
    setSongData({ ...songData, searchText: '' })
  }

  // when ENTER key is pressed search the songs list
  const checkIfEnterPressed = (e) => {
    if (e.which == 13 || e.keyCode == 13) {
      modifySongs()
    }
  }

  // modify the list of songs based on searched text
  const modifySongs = () => {
    let toBeSearchedSongs = [...props.songs]
    const searchValue = songData.searchText.toLowerCase()

    // if the user is searching something only then 
    if (searchValue != '') {
      toBeSearchedSongs = toBeSearchedSongs.filter((song) => {

        let songAttrs = `${song.name}, ${song.genre.join(', ')}, ${song.singers.join(', ')}, ${(song.movie) ? song.movie : song.album}`
        songAttrs = songAttrs.toLowerCase()
        return songAttrs.includes(searchValue)
      })
    }

    // set the state variable accordingly
    setSongData({ ...songData, songs: toBeSearchedSongs, emptyMessage: toBeSearchedSongs.length == 0 ? 'Not found try with something else' : songData.emptyMessage })
  }

  const { songs, searchText, emptyMessage } = songData
  const { changeRating } = props

  return (
    <div className="show-songs">
      <SearchBar
        searchText={searchText}
        clearSerchText={clearSerchText}
        checkIfEnterPressed={checkIfEnterPressed}
        changeSearchText={changeSearchText} />

      <div className="song-list">
        {
          (songs.length > 0) ?
            songs.map((song) => {
              return <Song key={song._id} {...song} changeRating={changeRating} />
            })
            :
            emptyMessage
        }
      </div>
    </div>
  );
};

export default SongsPanel;
