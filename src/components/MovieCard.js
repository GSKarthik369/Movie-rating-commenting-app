import StarRating from "./StarRating"
import CommentSection from "./CommentSection"
import "./MovieCard.scss"

function MovieCard({ movie, updateRating, addComment }) {
  return (
    <div className="movie-card">
      <img src={movie.image || "/placeholder.svg"} alt={movie.title} className="movie-card__image" />
      <div className="movie-card__content">
        <h2 className="movie-card__title">{movie.title}</h2>
        <StarRating rating={movie.rating} onRatingChange={(newRating) => updateRating(movie.id, newRating)} />
        <CommentSection
          movieId={movie.id}
          comments={movie.comments}
          addComment={(comment) => addComment(movie.id, comment)}
        />
      </div>
    </div>
  )
}

export default MovieCard

