import React from "react";
import {
  Typography,
  Container,
} from "@mui/material";

import ReviewsList from "../../Components/ReviewsList/ReviewsList";

type Review = {
  name: string;
  text: string;
};

const Reviews = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            margin: "30px 0",
            textTransform: "uppercase",
          }} >
          Reviews
        </Typography>
        <ReviewsList />
      </Container>
    </>
  );
};

export default Reviews;
