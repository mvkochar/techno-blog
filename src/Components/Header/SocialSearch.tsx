import react from "react";
import { Container, Link } from "@mui/material";

const SocialSearch = () => {
  let now = new Date();
  return (
    <div className="header-social">
        <div className="header-social-media">
          <div className="header-social-item">
            <Link href="https://facebook.com" target={"_blank"}>
              <img src="../images/facebook.png" alt="facebook" />
            </Link>
          </div>
          <div className="header-social-item">
            <Link href="https://twitter.com" target={"_blank"}>
              <img src="../images/twitter.png" alt="twitter" />
            </Link>
          </div>
          <div className="header-social-item">
            <Link href="https://www.google.com" target={"_blank"}>
              <img src="../images/google-plus.png" alt="google" />
            </Link>
          </div>
          <div className="header-social-item">
            <Link href="https://www.linkedin.com" target={"_blank"}>
              <img src="../images/linkedin.png" alt="pinterst" />
            </Link>
          </div>
          <div className="header-social-item">
            <Link href="/" target={"_blank"}>
              <img src="../images/world-wide-web.png" alt="web" />
            </Link>
          </div>
          <div className="header-social-item">
            <Link href="https://www.pinterest.com" target={"_blank"}>
              <img src="../images/pinterest.png" alt="web" />
            </Link>
          </div>
        </div>
        <div className="header-social-date">{`${now.toUTCString()}`}</div>
        <form className="header-social-search">
          <input type="text" name="search" placeholder="Search" />
          <input type="submit" name="searchBtn" value="" />
        </form>
    </div>
  );
};

export default SocialSearch;
