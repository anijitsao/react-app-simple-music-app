// TopFivePanel component
import { SongType } from "../types/songTypes";
import Constants from "../Constants";

type TopFivePanelProps = {
  songs: SongType[];
};

export default ({ songs }: TopFivePanelProps) => {
  const allConstants = Constants();
  const NUMBER_OF_TOP_SONGS = allConstants.NUMBER_OF_TOP_SONGS;

  // sort in descending order
  let topSongs = [...songs].sort((a, b) => {
    return b.rating - a.rating;
  });

  // show upto certain number
  topSongs = topSongs.slice(0, NUMBER_OF_TOP_SONGS);

  return (
    <section className="show-songs">
      {topSongs.length > 0
        ? topSongs.map((song) => {
            return (
              <article key={song._id} className="song-info">
                <div className="song-name">
                  {song.name}
                  <div className="song-artist">{`Singers: ${song.singers.join(
                    ", "
                  )}`}</div>
                </div>
              </article>
            );
          })
        : "List of the songs is populated..."}
    </section>
  );
};
