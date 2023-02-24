import MovieCard from "./MovieCard";

const MovieScreen = ({
  list,
  page,
  setPage,
  MovieList,
  addMovie,
  removeMovie,
}) => {
  let movieDisplay = list.map((item, index) => {
    return (
      <MovieCard
        movie={item}
        key={index}
        addMovie={addMovie}
        removeMovie={removeMovie}
        list={list}
      />
    );
  });

  const decrement = () => {
    if(page > 1){
        setPage(page - 1)
    }
  }

  const increment = () => {
    setPage(page + 1)
  }

  return (
    <div className="page">
      <h1>Ben's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
