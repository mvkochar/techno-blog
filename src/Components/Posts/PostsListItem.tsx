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
import { Comment } from "./PostsArray";
import PostCommentsList from "./PostCommentsList";

type Props = {
  id: number
  image: string
  title: string
  description: string
  category: string
  addFavouritePost : (postId: number) => void
  isViewedCategoryLink?: boolean
  isViewedRead?: boolean
  isFavouritePrint?: boolean
  clickCategory: (name: string) => void
  comments?: Comment[]
  isViewedComments?: boolean 
};

const PostsListItem = ({
  id,
  image,
  title,
  description,
  category,
  addFavouritePost,
  isViewedCategoryLink = true,
  isViewedRead = true,
  isFavouritePrint = true,
  clickCategory,
  comments = [],
  isViewedComments = false

}: Props) => {

  const oldLikedCount = window.localStorage.getItem(`FAVOURITE_POST_${id}`)
  const [likedCount, setLikedCount] = React.useState(oldLikedCount ? +oldLikedCount : 0);

  const likeClick = () => {
    if(likedCount === 0) {
      addFavouritePost(id)
    }
    setLikedCount((prevState) => {
      window.localStorage.setItem(`FAVOURITE_POST_${id}`, String(prevState + 1))
      return prevState + 1;
    });
   };

  return (
    <article>
      <Card className= { isViewedComments ? "post post-center" : "post"}>
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
            <Link to={`../post/:${id}`} style ={{textDecoration: "none"}} >
              <Button size="small">Read More</Button>
            </Link>
          )}
          { isFavouritePrint && 
          <>
          <IconButton aria-label="add to favorites" onClick={likeClick}>
            <FavoriteIcon />
          </IconButton>
          <Typography>{likedCount}</Typography>
          </>
        }
        </CardActions>
      </Card>
      {isViewedComments && <PostCommentsList comments={comments}/>}
    </article>
  );
};
export default PostsListItem;
