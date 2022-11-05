import { Container } from "@mui/system"
import React from "react"
import PostsList from "../../Components/Posts/PostsList"

type Props = {
  clickCategory: (name: string) => void;
  categoryName : string
}


const Home = (props: Props) => {
    return (
        <main>
            <Container maxWidth ="lg">
                <PostsList clickCategory={props.clickCategory} categoryName = {props.categoryName}/>
            </Container>
        </main>
    )
}

export default Home