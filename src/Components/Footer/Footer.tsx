import { Button, Container, Grid } from "@mui/material";
import React from "react";
import MostPopular from "./MostPopular/MostPopular";
import Comments from "./Comments/Comments";
import "./Footer.css";
import QuickLinks from "./QuickLinks/QuiickLinks";
import Newsletters from "./Newsletters/Newsletters";
import FooterBar from "./FooterBar/FooterBar";

type Props = {
  clickCategory: (name: string) => void;
};

function Footer(props: Props ) {
  return (
    <footer className="footer">
      <div className="footer-info">
        <Container maxWidth="lg">
          <Grid container spacing={7}>
            <Grid item maxWidth={204}>
              <Comments />
            </Grid>
            <Grid item maxWidth={204}>
              <QuickLinks />
            </Grid>
            <Grid item width={200}></Grid>
            <Grid item maxWidth={300}>
              <MostPopular />
            </Grid>
            <Grid item maxWidth={255}>
              <Newsletters />
            </Grid>
          </Grid>
        </Container>
      </div>
      <FooterBar clickCategory={props.clickCategory}/>
    </footer>
  );
}

export default Footer;
