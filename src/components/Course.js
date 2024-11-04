import axios from "axios";
import React, { useState } from "react";
import {
    Card, CardBody, CardSubtitle, CardText, Button, Container, Modal, ModalHeader, ModalBody, Form, FormGroup, Input,
} from "reactstrap";
import base_url from "../API/Boot_API";
import { toast } from "react-toastify";

const Course = ({ course, remove, update }) => {
    const [modal, setModal] = useState(false);
    const [updatedCourse, setUpdatedCourse] = useState(course);

    const toggle = () => setModal(!modal);

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("Course Deleted successfully");
                remove(id);
            },
            (error) => {
                toast.error("Course not deleted || Server problem");
            }
        );
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`${base_url}/courses/${updatedCourse.id}`, updatedCourse).then(
            (response) => {
                toast.success("Course updated successfully!");
                update(updatedCourse);
                toggle();
            },
            (error) => {
                toast.error("Course not updated || Server problem");
            }
        );
    };

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">
                    <strong>{course.title}</strong> {/* Title displayed in bold */}
                </CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="primary" outline onClick={toggle}>Update</Button>
                    <Button color="warning" style={{ marginLeft: '10px' }} outline onClick={() => {
                        deleteCourse(course.id);
                    }}>Delete</Button>
                </Container>
            </CardBody>

            {/* Modal for updating the course */}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Course</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleUpdate}>
                        <FormGroup>
                            <label htmlFor="courseTitle">Course Title</label>
                            <Input
                                type="text"
                                id="courseTitle"
                                value={updatedCourse.title}
                                onChange={(e) => setUpdatedCourse({ ...updatedCourse, title: e.target.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="courseDescription">Course Description</label>
                            <Input
                                type="textarea"
                                id="courseDescription"
                                value={updatedCourse.description}
                                onChange={(e) => setUpdatedCourse({ ...updatedCourse, description: e.target.value })}
                            />
                        </FormGroup>
                        <Container className="text-center">
                            <Button type="submit" color="success">Save Changes</Button>
                            <Button color="secondary" style={{ marginLeft: '10px' }} onClick={toggle}>Cancel</Button>
                        </Container>
                    </Form>
                </ModalBody>
            </Modal>
        </Card>
    );
};

export default Course;
