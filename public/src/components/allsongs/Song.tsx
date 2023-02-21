// components and types
import Star from "./Star";
import Popover from "./Popover";
import { SongType } from "../types/songTypes";

// Constants
import Constants from "../Constants";

// css
import "../../css/song.css";

type SongProps = {
  key: string;
  song: SongType;
  changeRating: (id: string, rating: number) => void;
};

const Song = (props: SongProps) => {
  // initialize the Constants
  const allConstants = Constants();
  const { movie, album, name, rating, singers, genre, _id, url } = props.song;

  return (
    <article className="song-info">
      <section className="song-name">
        {name}

        <div className="song-artist">
          <span className="movie-info">{`${
            movie ? `Movie: ${movie}` : `Album: ${album}`
          }`}</span>
          <Popover
            name={name}
            movie={movie}
            album={album}
            genre={genre}
            singers={singers}
          />
        </div>
      </section>
      <section className="listen-song">
        <audio controls src={url} />
      </section>
      <section className="song-rating">
        {allConstants.RATING_POINTS.map((ele, index) => {
          return (
            <Star
              key={index}
              changeRating={() => props.changeRating(_id, ele)}
              rating={rating}
              index={ele}
            />
          );
        })}
      </section>
    </article>
  );
};

export default Song;
