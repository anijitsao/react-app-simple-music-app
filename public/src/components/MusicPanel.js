import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

// components
import SongsPanel from './allsongs/SongsPanel'
import TopFivePanel from './topfive/TopFivePanel'
import NavBar from './layout/NavBar'

// Constants
import Constants from './Constants'

const MusicPanel = () => {

  // Initialize initial state and its modifier function
  const [musicData, setMusicData] = useState(
    {
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
    })

  // initialize all the constants
  const allConstants = Constants()

  // get all the songs from back end 
  useEffect(() => {
    getSongs()
  }, [])

  // get all the songs from back end
  const getSongs = async () => {
    try {
      const res = await axios({ method: allConstants.method.GET, url: allConstants.getSongs, header: allConstants.header })
      setMusicData({ ...musicData, songs: res.data })
    } catch (err) {
      console.log('Error occurred...', err)
    }
  }

  // change the rating of an song
  const changeRating = (id, rating) => {
    const newSongs = [...musicData.songs]

    // put the rating in appropriate place
    newSongs.forEach((ele, index, arr) => {
      if (ele._id == id) {
        arr[index].rating = rating
      }
    })
    setMusicData({ ...musicData, songs: newSongs })
    modifySong(id, rating)
  }

  // modify the song by API call
  const modifySong = async (id, rating) => {
    try {
      await axios({
        method: allConstants.method.PUT,
        url: allConstants.updateRating.replace('{id}', id).replace('{rating}', rating),
        header: allConstants.header
      })
    } catch (err) {
      console.log('Some Error occurred during the update', err)
    }
  }

  const makeActiveLink = (index) => {
    setMusicData({ ...musicData, active: index })
  }

  const { songs, links, active } = musicData

  return (
    <Router>
      <div className="music-panel">
        <NavBar links={links} active={active} makeActiveLink={makeActiveLink} />
        <Switch>
          <Route exact path="/"
            render={(props) => (
              <SongsPanel {...props} songs={songs} changeRating={changeRating} />
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

export default MusicPanel;
