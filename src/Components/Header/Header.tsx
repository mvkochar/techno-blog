import { AppBar, Button, Toolbar, Container } from "@mui/material";
import react from "react";
import HeaderLogo from "./HeaderLogo";
import SocialSearch from "./SocialSearch";
import "./header.css";

const Header = () => {
  return (
    <>
      <SocialSearch />
      <AppBar
        className="header-bar"
        position="static"
        sx={{ backgroundColor: "#fff" }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <HeaderLogo />
            <Button sx={{ color: "#2f3032", textTransform: "uppercase" }}>
              Home
            </Button>
            <Button sx={{ color: "#2f3032", textTransform: "uppercase" }}>
              Browser
            </Button>
            <Button sx={{ color: "#2f3032", textTransform: "uppercase" }}>
              Graphics
            </Button>
            <Button sx={{ color: "#2f3032", textTransform: "uppercase" }}>
              Inspiration
            </Button>
            <Button sx={{ color: "#2f3032", textTransform: "uppercase" }}>
              Website
            </Button>
            <Button sx={{ color: "#2f3032", textTransform: "uppercase" }}>
              Templates
            </Button>
            <Button sx={{ color: "#2f3032", textTransform: "uppercase" }}>
              Contact us
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
