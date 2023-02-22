// css
import "../../css/popover.css";
import { SongType } from "../types/songTypes";

type PopoverProps = {
  popoverInfo: SongType;
};

const Popover = (props: PopoverProps) => {
  const { album, genre, singers, name } = props.popoverInfo;
  return (
    <section className="popover">
      <span className="popover-icon fa fa-info-circle"></span>
      <div className="popover-content">
        <span className="popover-info">{`Name: ${name}`}</span>
        <span className="popover-info">{`Album: ${album}`}</span>
        <span className="popover-info">{`Genre: ${genre.join(", ")}`}</span>
        <span className="popover-info">{`Singers: ${singers.join(", ")}`}</span>
      </div>
    </section>
  );
};

export default Popover;
