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
};

const Main = ({
  categoryName,
  clickCategory,
}: Props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            clickCategory={clickCategory}
            categoryName={categoryName}
          />
        }
      />
      <Route
        path="category"
        element={
          <Category
            categoryName={categoryName}
            clickCategory={clickCategory}
          />
        }
      />
      <Route
        path="post/:id"
        element={
          <Post
            clickCategory={clickCategory}
          />
        }
      />
      <Route path="reviews" element={<Reviews />} />
      <Route
        path="favourites"
        element={
          <Favourites
            clickCategory={clickCategory}
          />
        }
      />
    </Routes>
  );
};

export default Main;
