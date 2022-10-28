import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./PostsListItem.css";
import { Typography } from "@mui/material";




type Props = {
  image: string;
  title: string;
  description: string;
  category: string;
};

const PostsListItem = (props: Props) => {
  const[likedCount, setLikedCount] = React.useState(0)

const likeClick = () => {
  setLikedCount(likedCount + 1) 
}
  return (
    <article>
      <Card className="post">
        <CardMedia component="img" image={props.image} alt={props.title} />
        <CardContent>
          <div className="post-title">{props.title}</div>
          <div className="post-description">{props.description}</div>
          <div className="post-category">{props.category}</div>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <IconButton aria-label="add to favorites" onClick={likeClick}>
            <FavoriteIcon />
          </IconButton>
          <Typography>
             {likedCount}
          </Typography>
        </CardActions>
      </Card>
    </article>
  );
};
export default PostsListItem;
