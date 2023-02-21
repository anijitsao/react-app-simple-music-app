// Star component
import { MouseEventHandler, SyntheticEvent } from "react";

type StarProps = {
  rating: number;
  index: number;
  changeRating: any;
};

export default ({ rating, index, changeRating }: StarProps) => {
  let starRating = rating || 1;
  const checkedCount =
    index <= starRating
      ? "fa fa-star checked star"
      : "fa fa-star unchecked star";
  return <span className={checkedCount} onClick={changeRating}></span>;
};
