// Star component
import { MouseEventHandler, SyntheticEvent } from "react";

type StarProps = {
  rating: string;
  index: number;
  changeRating: any;
};

export default ({ rating, index, changeRating }: StarProps) => {
  let starRating = isNaN(parseInt(rating)) ? 1 : parseInt(rating);
  const checkedCount =
    index <= starRating
      ? "fa fa-star checked star"
      : "fa fa-star unchecked star";
  return <span className={checkedCount} onClick={changeRating}></span>;
};
