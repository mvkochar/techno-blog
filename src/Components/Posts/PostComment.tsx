import React from 'react'


type PostCommentProps = {
    author: string
    text: string
}

const PostComment = ({author, text} : PostCommentProps) => {
  return (
    <div className="post-comment">
        <p className="post-comment-text">{text}</p>
        <div className="post-comment-author">{author}</div>
    </div>
  )
}

export default PostComment