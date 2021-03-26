// Star component
export default ({ rating, index, changeRating }) => {
  rating = (isNaN(parseInt(rating))) ? 1 : parseInt(rating)
  const checkedCount = (index <= rating) ? 'fa fa-star checked star' : 'fa fa-star unchecked star'
  return (
    <span className={checkedCount} onClick={changeRating}></span>
  );
};
