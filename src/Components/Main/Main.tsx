import { Container } from "@mui/system"
import React from "react"
import PostsList from "../Posts/PostsList"

const Main = () => {
    return (
        <main>
            <Container maxWidth ="lg">
                <PostsList/>
            </Container>
        </main>
    )
}

export default Main