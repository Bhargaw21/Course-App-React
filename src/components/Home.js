import React, { useEffect } from "react";
import { Container, Row, Col, Button } from 'reactstrap';


const Home = () => {
  useEffect(() => {
    document.title = "Home || Code with Bhargaw";
  }, []);

  return (
    <Container className="my-5 home-container">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="display-4 mb-4">Code with Bhargaw</h1>
          <p className="lead mb-4">
            Developed by Bhargaw Singh for learning purposes. Here, we will learn about ReactJS for frontend development.
          </p>
          <Button color="primary" outline className="learn-more-button">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
