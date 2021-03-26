import React, { Component } from 'react';

// components
import Song from './Song'
import SearchBar from './SearchBar'


class SongsPanel extends Component {

  constructor(props) {
    super(props)
    console.log('props here', this.props)
    this.state = {
      songs: this.props.songs,
      searchText: '',
      emptyMessage: 'List of the songs is populated...'
    }

    // to help the garbage collector
    this.changeSearchText = this.changeSearchText.bind(this)
    this.clearSerchText = this.clearSerchText.bind(this)
    this.checkIfEnterPressed = this.checkIfEnterPressed.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.songs.length != this.props.songs.length) {
      this.setState({ songs: nextProps.songs })
    }
  }

  changeSearchText(event) {
    this.setState({ searchText: event.target.value })
  }

  // when the X is pressed
  clearSerchText() {
    this.setState({ searchText: '' })
  }

  checkIfEnterPressed(event) {
    event.persist()

    if (event.which == 13 || event.keyCode == 13) {
      this.modifySongs()
    }
  }

  // modify the list of songs based on searched text
  modifySongs() {
    let toBeSearchedSongs = [...this.props.songs]
    let searchValue = this.state.searchText.toLowerCase()
    // console.log('search value is', searchValue)

    if (searchValue != '') {
      // if the user is searching something only then 
      toBeSearchedSongs = toBeSearchedSongs.filter((song) => {

        let songAttrs = `${song.name}, ${song.genre.join(', ')}, ${song.singers.join(', ')}, ${(song.movie) ? song.movie : song.album}`
        songAttrs = songAttrs.toLowerCase()
        // console.log('attrs:', songAttrs, songAttrs.includes(searchValue))

        return songAttrs.includes(searchValue)
      })
    }

    this.setState({ songs: toBeSearchedSongs })

    if (toBeSearchedSongs.length == 0) {
      this.setState({ emptyMessage: 'Not found try with something else' })
    }
  }

  render() {

    let { songs, searchText, emptyMessage } = this.state
    let { changeRating } = this.props

    return (
      <div className="show-songs">
	  		<SearchBar 
	  		searchText={searchText}
	  		clearSerchText={this.clearSerchText}
	  		checkIfEnterPressed={this.checkIfEnterPressed}
	  		changeSearchText={this.changeSearchText}/>
	  	 
       <div className="song-list">
         {
  	  	 	(songs.length > 0) ?
  		  	 	songs.map((song)=> {
  		  	 		return <Song key={song._id} {...song} changeRating={changeRating}/>
  		  	 	})
  	  	 	:
  	  	 		emptyMessage
  	  	 }
       </div>
  	</div>
    );
  }
};



export default SongsPanel;