import React, { useState } from "react"
import {
  TextareaAutosize,
  TextField,
  Typography,
  Button,
  Grid,
  Container,
} from "@mui/material";

import ReviewsListItem from "../../Components/ReviewsListItem/ReviewsListItem";


type Review = {
  name: string;
  text: string;
};

const Reviews = () => {
  const arrReview: Review[] = [
    {
      name: "Mauser",
      text: "I have had this monitor for only one day, and I am not very impressed with it. The monitor control buttons being in the back where you have to blindly feel for them and just remember which one is which is a terrible design. All of my other monitors have the buttons under the front edge where they are so much easier to use.",
    },
    {
      name: "R. Carr",
      text: "My old 15 year old HP 24in screen died. This was the replacement. I use this screen to type documents & program. (The other is a Wacom tablet screen for art & photography and the occasional landscape document). The screen is bright and easy to use. I played around with the color settings...it's easy to adjust, but since I rarely use it for art & photography, it's not urgent.",
    },
    {
      name: "Saipan670",
      text: "What this monitor will allow you to do is bridge the gap between a low quality home pc monitor and a better spec'd monitor. This monitor will give you a great picture and decent refresh rate for something in this price that will serve your average everyday gamer and PC user. Now if your looking for a cheap gaming monitor that will help you get ranked in CoD,Apex or OverWatch, this ain't it look else where. This thing is a great beginner/extra or everyday home use monitor. For my use case the 2 I have bought work great!",
    },
  ];

  const [reviews, setReviews] = useState<Review[]>(arrReview);

  const [newReview, setNewReview] = useState<Review>({ name: "", text: "" });

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewReview((prevState: Review) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview((prevState: Review) => ({
      ...prevState,
      text: e.target.value,
    }));
  };

  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newReview.name === "" || newReview.text === "") {
      alert("all fields are required");
    } else {
      setReviews((prevState: Review[]) => {
        return [...prevState, newReview];
      });
      setNewReview({
        name: "",
        text: "",
      });
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            margin: "30px 0",
            textTransform: "uppercase"
          }}
        >
          Reviews
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          mt={4}
          mb={5}
        >
          {reviews.map(({ name, text }: Review, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <ReviewsListItem name={name} text={text} />
            </Grid>
          ))}
        </Grid>
        <form
          onSubmit={onSend}
          style={{
            marginTop: "10px",
            marginBottom: "100px",
            textAlign: "center",
            padding: 10 
          }}
        >
          <Typography variant="h5">Please leave a review</Typography>
          <div
            style={{
              margin: "15px 0",
            }}
          >
            <TextField
              size="medium"
              label="Your name"
              value={newReview.name}
              onChange={handleChangeName}
            />
          </div>
          <TextareaAutosize
            minRows={5}
            placeholder="Your message"
            onChange={handleChangeText}
            value={newReview.text}
            style={{ width: 200, outline: "none", marginBottom: 10, padding: 4 }}
          />
          <div>
            <Button type="submit" variant="outlined">
              Send
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Reviews;
