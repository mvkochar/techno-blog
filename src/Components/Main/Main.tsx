import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Category from "../../pages/Category/Category"

type Props = {
    categoryName: string
    clickCategory: (name: string) => void;
  }

const Main = (props: Props) => {
    return (
        <main>
            <Routes>
                    <Route
                        path="/"
                        element={<Home clickCategory={props.clickCategory} categoryName = {props.categoryName}/>}
                    />
                    <Route path="category" element={<Category categoryName= {props.categoryName} clickCategory = {props.clickCategory}/>} />
                    
                </Routes>

        </main>
    )
}

export default Main