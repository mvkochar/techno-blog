import { Button, Container, Grid } from "@mui/material";
import React from "react";
import Comments from "./Comments/Comments";
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth = 'lg'>
        <Grid container>
          <Grid item maxWidth={204}>
             <Comments />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
