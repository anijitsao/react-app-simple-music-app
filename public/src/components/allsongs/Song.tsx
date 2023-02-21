// components
import Star from "./Star";
import Popover from "./Popover";

// Constants
import Constants from "../Constants";

// css
import "../../css/song.css";

import { SongType } from "../types/songTypes";

const Song = (props: SongType) => {
  // initialize the Constants
  const allConstants = Constants();
  const { movie, album, name, rating, singers, genre, changeRating, _id, url } =
    props;

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
              changeRating={() => changeRating(_id, ele)}
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
