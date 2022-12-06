import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./PostsListItem.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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

  let oldLikedState : number;
  if(window.localStorage.getItem(`FAVOURITE_POST_${id}`) !== null ) {
     oldLikedState = 1
  } 
  else {
    oldLikedState = 0
  }  

  const [likedState, setLikedState] = React.useState(oldLikedState);

  const likeClick = () => {
    console.log(likedState)
    if(likedState === 1) {
      setLikedState(0)
      window.localStorage.removeItem(`FAVOURITE_POST_${id}`)
    }
    else {
      setLikedState(1)
      window.localStorage.setItem(`FAVOURITE_POST_${id}`, "1")
    }
   
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
           { likedState ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
          </IconButton>

          </>
        }
        </CardActions>
      </Card>
      {isViewedComments && <PostCommentsList comments={comments}/>}
    </article>
  );
};
export default PostsListItem;
