// Star component
import { MouseEventHandler } from "react";

type StarProps = {
  rating: number;
  index: number;
  changeRating?: MouseEventHandler;
};

export default ({ rating, index, changeRating }: StarProps) => {
  const checkedCount =
    index <= rating ? "fa fa-star checked star" : "fa fa-star unchecked star";
  return <span className={checkedCount} onClick={changeRating}></span>;
};
