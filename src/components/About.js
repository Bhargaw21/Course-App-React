import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";

const About = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col md={{ size: 8, offset: 2 }}>
                    <Card className="shadow-sm">
                        <CardBody>
                            <CardTitle tag="h1" className="text-center mb-4">About This Project</CardTitle>
                            <CardText>
                                This course management application is designed to help users manage their courses effectively. 
                                It allows users to add, update, and delete courses while providing an intuitive interface for managing course details.
                            </CardText>
                            <h4 className="mt-4">Features:</h4>
                            <ListGroup>
                                <ListGroupItem>Add new courses with details such as title and description.</ListGroupItem>
                                <ListGroupItem>Edit existing courses to update their information.</ListGroupItem>
                                <ListGroupItem>Delete courses that are no longer needed.</ListGroupItem>
                                <ListGroupItem>View all courses in a single, user-friendly interface.</ListGroupItem>
                            </ListGroup>
                            <h4 className="mt-4">Technologies Used:</h4>
                            <ListGroup>
                                <ListGroupItem>ReactJS for building the frontend user interface.</ListGroupItem>
                                <ListGroupItem>React Router for navigation between components.</ListGroupItem>
                                <ListGroupItem>Axios for making HTTP requests to the backend.</ListGroupItem>
                                <ListGroupItem>Bootstrap and Reactstrap for responsive design.</ListGroupItem>
                                <ListGroupItem>Toastify for displaying notifications and alerts.</ListGroupItem>
                            </ListGroup>
                            <h4 className="mt-4">Author:</h4>
                            <CardText>
                                Developed by <strong>Bhargaw Singh</strong> for learning purposes.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
