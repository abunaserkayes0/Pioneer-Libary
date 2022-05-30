import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <Container>
        <Row
          xs={1}
          sm={1}
          className="d-flex align-items-center justify-content-center my-5 py-5 fst-italic"
        >
          <Col lg={8} md={8}>
            <div className="banner-content">
              <h1>
                Think before you speak ?
                <span className="text-primary">Read before you think</span>
              </h1>
              <p className='text-muted'>
                When you have read a book for the first time, you get to know a
                friend; read it for a second time and you meet an old friend.The
                man who does not read … has no advantage over the man who can't
                read.
              </p>
              <button className="btn btn-outline-primary">Live Demo</button>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="banner-image">
              <img src="https://i.ibb.co/GV2cmM6/banner.png" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
