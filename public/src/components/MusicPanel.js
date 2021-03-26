import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

// components
import SongsPanel from './allsongs/SongsPanel'
import TopFivePanel from './topfive/TopFivePanel'
import NavBar from './layout/NavBar'

// Constants
import Constants from './Constants'

class MusicPanel extends Component {
  // static propTypes = {
  //   className: PropTypes.string,
  // };

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      links: [{
        to: '/',
        desc: 'All Songs',
        id: 1
      },
      {
        to: '/topfive/',
        desc: 'Top 5 Songs',
        id: 2
      }
      ],
      active: 1
    }
    this.changeRating = this.changeRating.bind(this)
    this.allConstants = Constants()
  }

  componentDidMount() {


    this.getSongs()
  }

  // get all the songs from back end
  getSongs() {
    let allConstants = this.allConstants
    axios({
      method: allConstants.method.GET,
      url: allConstants.getSongs,
      header: allConstants.header
    })
      .then((res) => {

        this.setState({ songs: res.data })
      })
      .catch((err) => {
        console.log('Error occurred...', err)
      })
  }

  // change the rating of an song
  changeRating(id, rating) {
    console.log('Code reached in the MusicPanel', id, rating)

    let newSongs = [...this.state.songs]

    newSongs.forEach((ele, index, arr) => {
      if (ele._id == id) {
        arr[index].rating = rating
      }
    })

    this.setState({ songs: newSongs })
    this.modifySong(id, rating)
  }


  // modify the song by API call
  modifySong(id, rating) {
    let { allConstants } = this
    axios({
      method: allConstants.method.PUT,
      url: allConstants.updateRating.replace('{id}', id).replace('{rating}', rating),
      header: allConstants.header
    })
      .then((res) => {
        console.log(res.data.message)
      })
      .catch((err) => {
        console.log('Some Error occurred during the update', err)
      })
  }

  makeActiveLink(index) {
    console.log('Index', index)

    this.setState({ active: index })
  }
  render() {
    let { songs, links, active } = this.state

    return (
      <Router>
        <div className="music-panel">
          <NavBar links={links} active={active} makeActiveLink={this.makeActiveLink.bind(this)} />
          <Switch>
            <Route exact path="/"
              render={(props) => (
                <SongsPanel {...props} songs={songs} changeRating={this.changeRating} />
              )} />

            <Route path="/topfive/"
              render={(props) => (
                <TopFivePanel songs={songs} />
              )} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MusicPanel;