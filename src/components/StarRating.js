"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./StarRating.scss"

function StarRating({ rating, onRatingChange }) {
  const [hover, setHover] = useState(0)

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={`star-rating__star ${ratingValue <= (hover || rating) ? "star-rating__star--active" : ""}`}
            onClick={() => onRatingChange(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          />
        )
      })}
    </div>
  )
}

export default StarRating

