import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import "./Review.css";
const Review = (props) => {
  const emptyStar = <FontAwesomeIcon icon={faStar} />;
  const fullStar = <FontAwesomeIcon className="text-warning" icon={faStar} />;
  const { image, price, description, writer, rating,types } = props.review;

  return (
    <div>
      <Col>
        <Card className="shadow-sm">
          <Card.Img
            className="w-75 h-75 mx-auto p-3"
            variant="top"
            src={image}
          />
          <Card.Body>
            <h4>${price}</h4>
            <Rating
              emptySymbol={emptyStar}
              fullSymbol={fullStar}
              initialRating={rating}
              readonly
            />
            <Card.Subtitle><small>{types}</small></Card.Subtitle>
            <Card.Title className="fw-bold">Writer:{writer}</Card.Title>
            <Card.Text>{description.slice(0,250)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Review;
