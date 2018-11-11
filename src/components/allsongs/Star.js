import React from 'react';

const Star = (props) => {
  let { rating, index, changeRating } = props

  rating = (isNaN(parseInt(rating))) ? 1 : parseInt(rating)
  let checkedCount = (index <= rating) ? 'fa fa-star checked star' : 'fa fa-star unchecked star'
  return (
    <span className={checkedCount} onClick={changeRating}></span>
  );
};



export default Star;