import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PostsArray from "../../Components/Posts/PostsArray";
import PostsListItem from "../../Components/Posts/PostsListItem";

type Props = {
  
  categoryName: string;
  clickCategory: (name: string) => void;
};

const Category = (props: Props) => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          mt={4}
          mb={5}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          {props.categoryName}
        </Typography>
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          mt={3}
          mb={12}
        >
          {PostsArray.filter(
            (elem) => elem.category === props.categoryName
          ).map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id} pt={0}>
              <PostsListItem
                id={post.id} 
                isViewedCategoryLink={false}
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
