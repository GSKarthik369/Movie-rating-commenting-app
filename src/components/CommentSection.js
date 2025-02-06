"use client"

import { useState } from "react"
import "./CommentSection.scss"

function CommentSection({ movieId, comments, addComment }) {
  const [newComment, setNewComment] = useState("")

  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment(newComment.trim())
      setNewComment("")
    }
  }

  return (
    <div className="comment-section">
      <h3 className="comment-section__title">Comments</h3>
      <div className="comment-section__list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-section__item">
            <div className="comment-section__timestamp">{comment.timestamp}</div>
            <div className="comment-section__text">{comment.text}</div>
          </div>
        ))}
      </div>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
        className="comment-section__input"
      />
      <button onClick={handleAddComment} className="comment-section__button">
        Add Comment
      </button>
    </div>
  )
}

export default CommentSection