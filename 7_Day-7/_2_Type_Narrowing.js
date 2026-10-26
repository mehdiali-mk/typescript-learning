function getRuntime(media) {
    if ("numberOfEpisodes" in media) {
        return media.numberOfEpisodes * media.episodeDuration;
    }
    else {
        return media.duration;
    }
}
const bestMovieOfAllTime = {
    title: "The Shawshank Redemption",
    duration: 2.22,
};
const bestTvSeries = {
    title: "The Breaking Bad",
    numberOfEpisodes: 62,
    episodeDuration: 0.49,
};
console.log(getRuntime(bestMovieOfAllTime));
console.log(getRuntime(bestTvSeries));
export {};
