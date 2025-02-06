import MovieCard from "./MovieCard"
import "./MovieList.scss"

function MovieList({ movies, updateRating, addComment }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} updateRating={updateRating} addComment={addComment} />
      ))}
    </div>
  )
}

export default MovieList

