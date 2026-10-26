export {};

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numberOfEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("numberOfEpisodes" in media) {
    return media.numberOfEpisodes * media.episodeDuration;
  } else {
    return media.duration;
  }
}

const bestMovieOfAllTime: Movie = {
  title: "The Shawshank Redemption",
  duration: 2.22,
};

const bestTvSeries: TVShow = {
  title: "The Breaking Bad",
  numberOfEpisodes: 62,
  episodeDuration: 0.49,
};

console.log(getRuntime(bestMovieOfAllTime));
console.log(getRuntime(bestTvSeries));
