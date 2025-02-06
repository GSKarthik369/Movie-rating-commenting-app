"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./MovieOverview.scss"

function MovieOverview({ movies }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="movie-overview__button">
        Show All Ratings & Comments
      </button>
      {isOpen && (
        <div className="movie-overview__modal">
          <div className="movie-overview__content">
            <h2 className="movie-overview__title">Movie Ratings & Comments Overview</h2>
            <button onClick={() => setIsOpen(false)} className="movie-overview__close">
              &times;
            </button>
            <div className="movie-overview__list">
              {movies.map((movie) => (
                <div key={movie.id} className="movie-overview__item">
                  <h3 className="movie-overview__movie-title">{movie.title}</h3>
                  <div className="movie-overview__rating">
                    <span>Rating:</span>
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={`movie-overview__star ${index < movie.rating ? "movie-overview__star--active" : ""}`}
                      />
                    ))}
                  </div>
                  <h4 className="movie-overview__comments-title">Comments:</h4>
                  {movie.comments.length > 0 ? (
                    <ul className="movie-overview__comments-list">
                      {movie.comments.map((comment) => (
                        <li key={comment.id} className="movie-overview__comment">
                          <span className="movie-overview__comment-timestamp">{comment.timestamp}</span>
                          {comment.text}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="movie-overview__no-comments">No comments yet.</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MovieOverview

