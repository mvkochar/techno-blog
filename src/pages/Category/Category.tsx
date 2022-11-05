import { Container, Grid } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import PostsArray from "../../Components/Posts/PostsArray";
import PostsListItem from "../../Components/Posts/PostsListItem";

type Props = {
  categoryName: string
  clickCategory: (name: string) => void;
  
}

const Category = (props: Props) => {
  return (
    <>
      <Container maxWidth="lg">
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
        mb={5}
      >
      { PostsArray.filter(elem => elem.category === props.categoryName).map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <PostsListItem
              clickCategory={props.clickCategory}
              image={post.image}
              title={post.title}
              description={post.description}
              category={post.category}
            />
            </Grid>
         ))}
            
          </Grid>
          </Container>
    </>
     
    
  );
};

export default Category;
