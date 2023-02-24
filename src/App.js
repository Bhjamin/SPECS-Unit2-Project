import Header from "./components/Header";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieScreen from "./components/MovieScreen";
import WatchList from "./components/Watchlist";

function App() {
  const [movieList, setMovieList] = useState([]);

  const [watchList, setWatchList] = useState([]);

  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const addMovie = (movie) => {
    setWatchList([...watchList, movie])
  }

  const removeMovie = (movie) => {

    const newState = watchList.filter((movies) => {return movies.id !== movie.id})
    setWatchList(newState)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          addMovie={addMovie}
          list={movieList}
          page={page}
          setPage={setPage}
          MovieList={setMovieList}
          removeMovie={removeMovie}
        />
        <WatchList list={watchList} removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
