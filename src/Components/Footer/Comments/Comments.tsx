import React from "react";
import { Button } from "@mui/material";

const Comments = () => {
    return (
        <div className="footer-comments">
        <div className="title">Recent comments</div>
        <div className="footer-comments-item">
          <p>
            Aliquam lorem ante, dapibus in, viverra quis Aliquam lorem
            ante
          </p>
          <Button className="btn" variant="text">Read More</Button>
        </div>
        <div className="footer-comments-item">
          <p>
            Aliquam lorem ante, dapibus in, viverra quis Aliquam lorem
            ante
          </p>
          <Button className="btn" variant="text">Read More</Button>
        </div>
        <div className="footer-comments-item">
          <p>
            Aliquam lorem ante, dapibus in, viverra quis Aliquam lorem
            ante
          </p>
          <Button className="btn" variant="text">Read More</Button>
        </div>
      </div>
    )
}

export default Comments