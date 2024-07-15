import "./App.scss";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movie";
import { useRef } from "react";

function App() {
  const { movies } = useMovies();
  const movieInputRef = useRef();

  const showInput = () => {
    const value = movieInputRef.current.value;
    console.log(value);
  };

  return (
    <>
      <header className="l-header">
        <h1>Movie Searcher</h1>
        <div>
          <form className="c-form-movie-searcher">
            <input
              ref={movieInputRef}
              type="text"
              name="movie-input"
              id="movie-input"
              placeholder="Enter a movie"
            />
            <button onClick={showInput} type="submit">
              Search
            </button>
          </form>
        </div>
      </header>

      <main>
        <Movies movies={movies}></Movies>
      </main>
    </>
  );
}

export default App;
