import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import PostsArray from "../../Components/Posts/PostsArray";
import PostsListItem from "../../Components/Posts/PostsListItem";

type FavouritesProps = {
  clickCategory: (name: string) => void;
};

const Favourites = ({
  clickCategory
}: FavouritesProps) => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            margin: "30px 0",
            textTransform: "uppercase",
          }}
        >
          Favourite Posts
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          mt={4}
          mb={30}
        >
          {PostsArray.filter((elem) => window.localStorage.getItem(`FAVOURITE_POST_${elem.id}`)).map(
            (post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <PostsListItem
                  id={post.id}
                  clickCategory={clickCategory}
                  image={post.image}
                  title={post.title}
                  description={post.description}
                  category={post.category}
                  isFavouritePrint = {false}
                />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    
    </>
  );
};

export default Favourites;
