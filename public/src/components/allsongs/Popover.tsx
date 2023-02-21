// css
import "../../css/popover.css";

const Popover = (props) => {
  const { movie, album, genre, singers, name } = props;
  return (
    <section className="popover">
      <span className="popover-icon fa fa-info-circle"></span>
      <div className="popover-content">
        <span className="popover-info">{`Name: ${name}`}</span>
        <span className="popover-info">{`Movie: ${
          movie ? movie : album
        }`}</span>
        <span className="popover-info">{`Genre: ${genre.join(", ")}`}</span>
        <span className="popover-info">{`Singers: ${singers.join(", ")}`}</span>
      </div>
    </section>
  );
};

export default Popover;
