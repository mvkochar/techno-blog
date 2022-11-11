import React from "react";
import { AppBar, Button, Toolbar, Container } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  clickCategory: (name: string) => void;
};

const FooterBar = (props: Props) => {
  return (
    <AppBar
      className="footer-bar"
      position="static"
      sx={{ backgroundColor: "#000" }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <div className="footer-bar-creators">
            Design by <span>Shah Zobayer</span> Ahmed with passion and creative
            by: <span>RevoTheme</span>
          </div>
          <Link to={"/"} className={"footer-link"}>
            <Button
              sx={{ color: "#dddddd", textTransform: "none", fontSize: "13px" }}
            >
              Home
            </Button>
          </Link>
          <Link to={"/category"} className="footer-link">
            <Button
              onClick={() => props.clickCategory("mobile news")}
              sx={{ color: "#dddddd", textTransform: "none", fontSize: "13px" }}
            >
              Mobile news
            </Button>
          </Link>
          <Link to={"/category"} className="footer-link">
            <Button
              onClick={() => props.clickCategory("transport news")}
              sx={{ color: "#dddddd", textTransform: "none", fontSize: "13px" }}
            >
              Transport news
            </Button>
          </Link>
          
          <Link to={"/category"} className="footer-link">
            <Button
              onClick={() => props.clickCategory("global news")}
              sx={{ color: "#dddddd", textTransform: "none", fontSize: "13px" }}
            >
             Global news
            </Button>
          </Link>
          <Link to={"/reviews"} className={"footer-link"}>
            <Button
              sx={{ color: "#dddddd", textTransform: "none", fontSize: "13px" }}
            >
              Reviews
            </Button>
          </Link>
            </Toolbar>
      </Container>
    </AppBar>
  );
};

export default FooterBar;
