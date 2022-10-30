import { Button, Container, Grid } from "@mui/material";
import React from "react";
import Comments from "./Comments/Comments";
import './Footer.css'
import QuickLinks from "./QuickLinks/QuiickLinks";

function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth = 'lg'>
        <Grid container spacing={5}>
          <Grid item maxWidth={204}>
             <Comments />
          </Grid>
          <Grid item maxWidth={204}>
             <QuickLinks />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
