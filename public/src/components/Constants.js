// all the constants
function Constants() {
  const url = "http://localhost:3000/services"

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
  }
}

export default Constants
