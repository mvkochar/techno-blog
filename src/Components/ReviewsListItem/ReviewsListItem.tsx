import React from "react";
import { Card, CardContent } from "@mui/material";
import './ReviewsListItem.css'

type Props = {
  name: string;
  text: string;
};

const ReviewsListItem = ({ name, text }: Props) => {
  return (
    <Card className="review">
      <CardContent>
        <div className="review-name">
          {name}
        </div>
        <div>{text}</div>
      </CardContent>
    </Card>
  );
};

export default ReviewsListItem;
