import responseMovies from "../mocks/responseMovies.json";

export function useMovies() {
    const moviesContract = responseMovies.Search;
  
    const mappedMovies = moviesContract?.map((movieContract) => ({
      id: movieContract.imdbID,
      title: movieContract.Title,
      year: movieContract.Year,
      type: movieContract.Type,
      img: movieContract.Poster,
    }));
  
    return { movies: mappedMovies };
}