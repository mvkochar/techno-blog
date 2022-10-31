import { Button } from "@mui/material";
import React from "react";

const Newsletters = () => {
  return (
    <div className="footer-newsletters">
        <div className="title">Newsletters</div>
      <form>
        <input type="email" name="userEmail" placeholder="Enter Your email"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Newsletters;
