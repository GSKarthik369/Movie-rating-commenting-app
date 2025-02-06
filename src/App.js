"use client"
import  { useState } from "react"
import MovieList from "./components/MovieList"
import MovieOverview from "./components/MovieOverview"
import "./App.scss"

const initialMovies = [
  {
    id: 1,
    title: "Inception",
    image: "/placeholder.svg",
    rating: 0,
    comments: [],
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "/placeholder.svg",
    rating: 0,
    comments: [],
  },
  {
    id: 3,
    title: "Interstellar",
    image: "/placeholder.svg",
    rating: 0,
    comments: [],
  },
]

function App() {
  const [movies, setMovies] = useState(initialMovies)

  const updateMovieRating = (movieId, newRating) => {
    setMovies(movies.map((movie) => (movie.id === movieId ? { ...movie, rating: newRating } : movie)))
  }

  const addMovieComment = (movieId, comment) => {
    setMovies(
      movies.map((movie) =>
        movie.id === movieId
          ? {
              ...movie,
              comments: [...movie.comments, { id: Date.now(), text: comment, timestamp: new Date().toLocaleString() }],
            }
          : movie,
      ),
    )
  }

  return (
    <div className="app">
      <h1 className="app__title">Movie Rating App</h1>
      <MovieOverview movies={movies} />
      <MovieList movies={movies} updateRating={updateMovieRating} addComment={addMovieComment} />
    </div>
  )
}

export default App;
