import React from "react";
import { AppBar, Button, Toolbar, Container } from "@mui/material";

const FooterBar = () => {
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
          <Button sx={{ color: "#dddddd", textTransform: "none", fontSize: "13px" }}>Home</Button>
          <Button sx={{ color: "#dddddd", textTransform: "none", fontSize: "13px" }}>
            About
          </Button>
          <Button sx={{ color: "#dddddd", textTransform: "none", fontSize: "13px" }}>Faq</Button>
          <Button sx={{ color: "#dddddd", textTransform: "none", fontSize: "13px" }}>
            Contact
          </Button>
          <Button sx={{ color: "#dddddd", textTransform: "none", fontSize: "13px" }}>
            Privacy
          </Button>
          <Button sx={{ color: "#dddddd", textTransform: "none", fontSize: "13px" }}>
            Terms of use
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default FooterBar;
