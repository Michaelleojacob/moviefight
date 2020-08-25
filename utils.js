//this 'movie' is just a movie summary, just a handful of properties
const onMovieSelect = async (movie, summaryElement) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "15c4edfb",
      i: movie.imdbID,
    },
  });
  summaryElement.innerHTML = movieTemplate(response.data);
};

//movieDetail is the detailed movie info, lots of properties about that movie
const movieTemplate = (movieDetail) => {
  return `
        <article class= "media">
            <figure class="media-left">
                <p class="image">
                    <img src="${movieDetail.Poster}" />
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>${movieDetail.Title}</h1>
                    <h4>${movieDetail.Genre}</h4>
                    <p>${movieDetail.Plot}</p>
                </div>
            </div>
        </article>

        <article class="notification is-primary">
        <p class="title">${movieDetail.Awards}</p>
        <p class="subtitle">Awards</p>
        </article>

        <article class="notification is-primary">
        <p class="title">${movieDetail.BoxOffice}</p>
        <p class="subtitle">Box Office</p>
        </article>

        <article class="notification is-primary">
        <p class="title">${movieDetail.Metascore}</p>
        <p class="subtitle">Metascore</p>
        </article>

        <article class="notification is-primary">
        <p class="title">${movieDetail.imdbRating}</p>
        <p class="subtitle">IMDB Rating</p>
        </article>

        <article class="notification is-primary">
        <p class="title">${movieDetail.imdbVotes}</p>
        <p class="subtitle">IMDB Votes</p>
        </article>

        `;
};
