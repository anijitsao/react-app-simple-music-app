import React, { Component } from 'react';

// components
import Star from './Star'

class Song extends Component {

  constructor(props) {
    super(props)
    this.RATING_POINTS = [1, 2, 3, 4, 5]
    this.changeRating = this.changeRating.bind(this)
  }

  changeRating(id, rating) {
    this.props.changeRating(id, rating)
  }


  render() {

    let { movie, album, name, rating, singers, genre, changeRating, url } = this.props
    const RATING_POINTS = this.RATING_POINTS

    return (
      <div className="song-info">
        <div className="song-name">{name}


          <div className="song-artist">{`${(movie) ? `Movie: ${movie}` : `Album: ${album}`}`}
            <div className="popover">
              <span className="popover-icon fa fa-info-circle"></span>
              <div className="popover-content">
                <span className="popover-info">{`Name: ${name}`}</span>
                <span className="popover-info">{`Movie: ${(movie) ? movie : album}`}</span>
                <span className="popover-info">{`Genre: ${genre.join(', ')}`}</span>
                <span className="popover-info">{`Singers: ${singers.join(', ')}`}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="listen-song">
          <audio controls src={"http://localhost:3000/songs/Tum Hi Ho.mp3"} />
        </div>
        <div className="song-rating">
          {
            RATING_POINTS.map((ele, index) => {
              return <Star key={index}
                changeRating={this.changeRating.bind(this, this.props._id, ele)}
                rating={rating}
                index={ele} />
            })
          }
        </div>

      </div>
    );
  }
};

export default Song;