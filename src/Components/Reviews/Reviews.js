import React from "react";
import { Container, Row } from "react-bootstrap";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./Reviews.css";
const Reviews = () => {
  const [reviews] = useReviews();

  return (
    <div>
      <Container>
        <Row xs={1} sm={1} md={3} lg={3} className="my-5 g-4">
          {reviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
