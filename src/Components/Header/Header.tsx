import { AppBar, Button, Toolbar, Container } from "@mui/material";
import react from "react";
import HeaderLogo from "./HeaderLogo";
import SocialSearch from "./SocialSearch";
import "./header.css";
import { Link } from "react-router-dom";

type Props = {
  clickCategory: (name: string) => void;
}

const Header = (props: Props) => {
  return (
    <header>
      <SocialSearch />
      <AppBar
        className="header-bar"
        position="static"
        sx={{ backgroundColor: "#fff" }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <HeaderLogo />
            <Link to={"/"} className = "header-link">
              <Button sx={{ color: "#2f3032", textTransform: "uppercase" }}>
                Home
              </Button>
            </Link>
            <Link to={"/category"} className = "header-link">
              <Button onClick={()=> props.clickCategory("mobile news") } sx={{ color: "#2f3032", textTransform: "uppercase" }}>
                mobile news
              </Button>
            </Link>
            <Link to={"/category"} className = "header-link">
              <Button onClick={()=> props.clickCategory("transport news") } sx={{ color: "#2f3032", textTransform: "uppercase" }}>
                transport news
              </Button>
            </Link>
            <Link to={"/category"} className = "header-link">
              <Button onClick={()=> props.clickCategory("global news") } sx={{ color: "#2f3032", textTransform: "uppercase" }}>
                global news
              </Button>
            </Link>
            <Button sx={{ color: "#2f3032", textTransform: "uppercase" }}>
              Contact us
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
