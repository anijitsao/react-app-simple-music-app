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
  	console.log('Id and Rating', id, rating)
  	this.props.changeRating(id, rating)
  }


  render() {

    let { movie, album, name, rating, singers, genre, changeRating } = this.props
    const RATING_POINTS = this.RATING_POINTS

    return (
      <div className="song-info">
    	<div className="song-name">{name}
    		<div className="song-artist">{`Singers: ${singers.join(', ')}`}</div>
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