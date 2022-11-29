import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Category from "../../pages/Category/Category";
import Post from "../../pages/Post/Post";
import Reviews from "../../pages/Reviews/Reviews";
import Favourites from "../../pages/Favourites/Favourites";

type Props = {
  isViewedCategoryLink?: boolean;
  categoryName: string;
  clickCategory: (name: string) => void;
  addFavouritePost: (postId: number) => void;
  favouritePosts: number[];
  favouriteCount: number
};

const Main = ({
  categoryName,
  clickCategory,
  addFavouritePost,
  favouritePosts,
  favouriteCount
}: Props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            clickCategory={clickCategory}
            categoryName={categoryName}
            addFavouritePost={addFavouritePost}
            favouriteCount={favouriteCount}
          />
        }
      />
      <Route
        path="category"
        element={
          <Category
            categoryName={categoryName}
            clickCategory={clickCategory}
            addFavouritePost={addFavouritePost}
          />
        }
      />
      <Route
        path="post/:id"
        element={
          <Post
            clickCategory={clickCategory}
            addFavouritePost={addFavouritePost}
          />
        }
      />
      <Route path="reviews" element={<Reviews />} />
      <Route
        path="favourites"
        element={
          <Favourites
            favouritePosts={favouritePosts}
            clickCategory={clickCategory}
            addFavouritePost={addFavouritePost}
          />
        }
      />
    </Routes>
  );
};

export default Main;
