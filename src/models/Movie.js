class Movie {
  constructor(rawData) {
    const { data } = rawData;
    this.title = data.title;
    this.posterPath = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    this.backdropPath = `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`;
    this.overview = data.overview;
    this.id = data.id;
    this.releaseYear = data.release_date.slice(0, 4);
    this.vote = (data.vote_average * 10).toString().concat('%');
    this.runtimeMinutes = data.runtime % 60;
    this.runtimeHours = Math.floor(data.runtime / 60);
  }
}

module.exports = Movie;
