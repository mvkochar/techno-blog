import React from "react";
import Grid from "@mui/material/Grid";
import PostsListItem from "./PostsListItem";
import PostsArray from "./PostsArray";

type Props = {
  clickCategory: (name: string) => void
}



const PostsList = (props: Props) => {
 
  return (
    <>
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
        mb={5}
      >

        {   
          PostsArray.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <PostsListItem
                id = {post.id}
                clickCategory={props.clickCategory}
                image={post.image}
                title={post.title}
                description={post.description}
                category={post.category}
              />
            </Grid>
        
        ))}
      </Grid>
    </>
  );
};

export default PostsList;
