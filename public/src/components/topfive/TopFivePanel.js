// TopFivePanel component
export default ({ songs }) => {

  const NUMBER_OF_TOP_SONGS = 5

  // sort in descending order
  let topSongs = [...songs].sort((a, b) => { return parseInt(b.rating) - parseInt(a.rating) })

  // show upto certain number
  topSongs = topSongs.slice(0, NUMBER_OF_TOP_SONGS)

  return (
    <div className="show-songs">

      {
        (topSongs.length > 0) ?
          topSongs.map((song) => {
            return (
              <div key={song._id} className="song-info">
                <div className="song-name">{song.name}
                  <div className="song-artist">{`Singers: ${song.singers.join(', ')}`}</div>
                </div>
              </div>
            );
          })
          :
          'List of the songs is populated...'
      }
    </div>
  );
};
