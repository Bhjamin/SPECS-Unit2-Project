import MovieCard from "./MovieCard";

const WatchList = ({ list, removeMovie }) => {
  let movieDisplay = list.map((item, index) => {
    return <MovieCard movie={item} key={index} removeMovie={removeMovie} />;
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default WatchList;
