import React from "react";
import Grid from "@mui/material/Grid";
import { Comment } from "./PostsArray";
import PostComment from "./PostComment";

type PostCommentsListProps = {
  comments: Comment[];
};

const PostCommentsList = ({ comments }: PostCommentsListProps) => {
  return (
    <>
      <h2
        style={{
          marginTop: "40px",
          paddingTop: "15px",
          textTransform: "uppercase",
          borderTop: "1px solid lightgray",
        }}
      >
        Comments
      </h2>
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
        mb={5}
      >
        {comments.map((comment) => (
          <Grid item xs={12} sm={6} md={4} key={comment.id}>
            <PostComment author={comment.author} text={comment.text} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PostCommentsList;
