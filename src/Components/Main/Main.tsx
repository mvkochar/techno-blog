import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Category from "../../pages/Category/Category";
import Post from "../../pages/Post/Post";

type Props = {
  isViewedCategoryLink?: boolean;
  categoryName: string;
  clickCategory: (name: string) => void;
};

const Main = ({ categoryName, clickCategory }: Props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home clickCategory={clickCategory} categoryName={categoryName} />
        }
      />
      <Route
        path="category"
        element={
          <Category categoryName={categoryName} clickCategory={clickCategory} />
        }
      />
     <Route path="post/:id" element={<Post clickCategory={clickCategory} />} />
    </Routes>
  );
};

export default Main;
