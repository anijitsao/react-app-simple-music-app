// all the constants
function Constants() {
  const url = "http://localhost:3000/services";

  return {
    // all the URLs
    url,
    getSongs: `${url}/getsongs`,
    updateRating: `${url}/updaterating/{id}/{rating}`,

    // listen song url
    songUrl: "http://localhost:3000/songs/",

    // the Content-Type
    header: { "Content-Type": "application/json" },

    // HTTP verbs
    method: {
      POST: "POST",
      GET: "GET",
      PUT: "PUT",
    },
    RATING_POINTS: [1, 2, 3, 4, 5],
    PERMISSIBLE_SONG_FILE_TYPE: ".mp3",
    NUMBER_OF_TOP_SONGS: 5,
    ALL_LINKS: [
      {
        to: "/",
        desc: "All Songs",
        linkId: "1",
      },
      {
        to: "/topfive",
        desc: "Top 5 Songs",
        linkId: "2",
      },
    ],
    ACTIVE_LINK: "1",
  };
}

export default Constants;
