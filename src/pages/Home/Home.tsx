import { Container } from "@mui/system";
import React from "react";
import PostsList from "../../Components/Posts/PostsList";
import Slider from "../../Components/Slider/Slider";

type Props = {
  clickCategory: (name: string) => void;
  categoryName: string;
  favouriteCount: number
  addFavouritePost : (postId: number) => void
};

const Home = (props: Props) => {
  return (
    <>
      <Slider />
      <main>
        <Container maxWidth="lg">
          <PostsList
            clickCategory={props.clickCategory}
            addFavouritePost={props.addFavouritePost}
            favouriteCount={props.favouriteCount}
          />
        </Container>
      </main>
    </>
  );
};

export default Home;
