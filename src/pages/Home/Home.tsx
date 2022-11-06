import { Container } from "@mui/system";
import React from "react";
import PostsList from "../../Components/Posts/PostsList";
import Slider from "../../Components/Slider/Slider";

type Props = {
  clickCategory: (name: string) => void;
  categoryName: string;
};

const Home = (props: Props) => {
  return (
    <>
      <Slider />
      <main>
        <Container maxWidth="lg">
          <PostsList
            clickCategory={props.clickCategory}
            categoryName={props.categoryName}
          />
        </Container>
      </main>
    </>
  );
};

export default Home;
