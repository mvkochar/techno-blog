import React from "react";
import Header from "./Components/Header/Header";
import "./app.css";
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
