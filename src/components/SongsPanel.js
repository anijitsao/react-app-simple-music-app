import React from 'react';

// components
import Song from './Song'

const SongsPanel = ({songs, changeRating}) => {
  return (
  	<div className="show-songs">
  	 {
  	 	songs.map((song)=> {
  	 		return <Song key={song._id} {...song} changeRating={changeRating}/>
  	 	})
  	 }
  	</div>
  );
};



export default SongsPanel;