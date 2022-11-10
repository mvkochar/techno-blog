import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./PostsListItem.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  isViewedCategoryLink?: boolean;
  isViewedRead?: boolean;
  clickCategory: (name: string) => void;
};

const PostsListItem = ({
  id,
  image,
  title,
  description,
  category,
  isViewedCategoryLink = true,
  isViewedRead = true,
  clickCategory,
}: Props) => {
  const [likedCount, setLikedCount] = React.useState(0);

  const likeClick = () => {
    setLikedCount((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <article>
      <Card className="post">
        <CardMedia component="img" image={image} alt={title} />
        <CardContent>
          <div className="post-title">{title}</div>
          <div className="post-description">{description}</div>
          {isViewedCategoryLink && (
            <Link to={"/category"}>
              {" "}
              <button
                className="post-category"
                onClick={() => clickCategory(category)}
              >
                {" "}
                {category}{" "}
              </button>{" "}
            </Link>
          )}
        </CardContent>
        <CardActions>
          {isViewedRead && (
            <Link to={`../post/:${id}`}>
              <Button size="small">Read More</Button>
            </Link>
          )}
          <IconButton aria-label="add to favorites" onClick={likeClick}>
            <FavoriteIcon />
          </IconButton>
          <Typography>{likedCount}</Typography>
        </CardActions>
      </Card>
    </article>
  );
};
export default PostsListItem;
