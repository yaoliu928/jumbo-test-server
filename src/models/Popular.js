class Popular {
  constructor(rawData) {
    this.vote = (rawData.vote_average || 0) * 10;
    this.title = rawData.title.toString();
    this.id = (rawData.id || '');
    this.posterPath = `https://image.tmdb.org/t/p/w500/${rawData.poster_path}`;
    this.releaseYear = (rawData.release_date || '').slice(0, 4);
    this.releaseMonth = this.calculateMonth((rawData.release_date || '').slice(5, 7));
  }
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["calculateMonth"] }] */

  calculateMonth(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[parseInt(month, 10) - 1];
  }
}

module.exports = Popular;
