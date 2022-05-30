import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./TopRatedReviews.css";
const TopRatedReviews = () => {
  const [reviews, setReviews] = useReviews();
  const topRatedReviews = reviews.slice(2, 5);
  return (
    <div className="my-5">
      <Container>
        <h2 className="text-center my-5 fw-bold">
          Top Rated Reviews({topRatedReviews.length})
        </h2>
        <Row xs={1} sm={1} md={3} lg={3} className="g-4">
          {topRatedReviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </Row>
        <Link to="/reviews" className="d-block text-center my-3">
          <Button>See All Reviews</Button>
        </Link>
      </Container>
    </div>
  );
};

export default TopRatedReviews;
