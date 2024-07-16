import "./App.scss";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movie";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { movies } = useMovies();
  const { search, updateSearch, error } = useSearch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  return (
    <>
      <header className="l-header">
        <h1>Movie Searcher</h1>
        <div>
          <form className="c-form-movie-searcher" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={search}
              type="text"
              name="movie"
              id="movie"
              placeholder="Enter a movie"
              style={{
                border: "1px solid transparent",
                borderColor: error ? "red" : "transparent",
              }}
            />
            <button type="submit">Search</button>
          </form>
          {error && (
            <small>
              <p className="c-form-movie-searcher__error">{error}</p>
            </small>
          )}
        </div>
      </header>

      <main>
        <Movies movies={movies}></Movies>
      </main>
    </>
  );
}

export default App;
