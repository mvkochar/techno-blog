import React from "react";
import Header from "./Components/Header/Header";
import "./app.css";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  const [categoryName, setCategoryName] = React.useState("mobile news");
  const [favouritePosts, setFavouritePosts] = React.useState<number[]>([]);

  //window.localStorage.clear()

  const clickCategory = (name: string) => {
    setCategoryName(name);
  };

  const addFavouritePost = (postId: number) => {
    setFavouritePosts((prevState) => {
      return [...prevState, postId];
    });
  };

  return (
    <>
      <Header clickCategory={clickCategory} />
      <Main
        categoryName={categoryName}
        favouritePosts={favouritePosts}
        clickCategory={clickCategory}
        addFavouritePost={addFavouritePost}
      />
      <Footer clickCategory={clickCategory} />
    </>
  );
}

export default App;
