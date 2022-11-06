import React from "react";
import Header from "./Components/Header/Header";
import "./app.css";
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer";
import Slider from "./Components/Slider/Slider";
import { Router } from "react-router-dom";
import Category from "./pages/Category/Category";



function App() {
  const [categoryName, setCategoryName] = React.useState("mobile news")

  const clickCategory = (name: string) => {
    console.log(name)
     setCategoryName(name)
  }   

  return (
    <>
      <Header />
      
      <Main categoryName= {categoryName} clickCategory = {clickCategory}/>
      <Footer/>
    </>
  );
}

export default App;
