export function MovieList({ movies }) {
  return (
    <div className="l-movies">
      {movies.map((movie) => (
        <div key={movie.id} className="c-movie">
          <img className="c-movie__img" src={movie.img} alt={movie.title} />
          <div className="c-movie__info">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function NoMoviesResults({ errorText }) {
  return (
    <article>
      <h3>Error</h3>
      <p>{errorText}</p>
    </article>
  );
}

export function Movies({ movies, errorText }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? (
    <MovieList movies={movies}></MovieList>
  ) : (
    <NoMoviesResults errorText={errorText}></NoMoviesResults>
  );
}
