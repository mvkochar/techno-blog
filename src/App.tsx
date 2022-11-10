import React from "react";
import Header from "./Components/Header/Header";
import "./app.css";
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer";



function App() {
  const [categoryName, setCategoryName] = React.useState("mobile news")

  const clickCategory = (name: string) => {
     setCategoryName(name)
  }   

  return (
    <>
      <Header clickCategory={clickCategory} />
      <Main categoryName= {categoryName} clickCategory = {clickCategory}/>
      <Footer clickCategory={clickCategory}/>
    </>
  );
}

export default App;
