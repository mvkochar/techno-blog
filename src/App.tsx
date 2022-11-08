import React from "react";
import Header from "./Components/Header/Header";
import "./app.css";
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer";



function App() {
  const [categoryName, setCategoryName] = React.useState("mobile news")

  const clickCategory = (name: string) => {
    console.log(name)
     setCategoryName(name)
  }   

  return (
    <>
      <Header clickCategory={clickCategory} />
      <Main categoryName= {categoryName} clickCategory = {clickCategory}/>
      <Footer/>
    </>
  );
}

export default App;
