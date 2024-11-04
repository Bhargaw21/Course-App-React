import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import base_url from "../API/Boot_API";

const AddCourse = () => {
    useEffect(() => {
        document.title = "Add Courses";
    }, []);

    const [course, setCourse] = useState({
        id: '',
        title: '',
        description: '',
    });

    const [isLoading, setIsLoading] = useState(false); // Loading state

    const handleForm = (e) => {
        e.preventDefault(); 

        if (!course.id || !course.title || !course.description) {
            toast.error("Please fill in all fields.", { position: "bottom-center" });
            return;
        }

        console.log("Course data submitted:", course);
        postDatatoServer(course);
    };

    const clearForm = () => {
        setCourse({
            id: '',
            title: '',
            description: '',
        });
    };

    const postDatatoServer = async (data) => {
        setIsLoading(true); // Set loading state
        try {
            const response = await axios.post(`${base_url}/courses`, data);
            console.log("Response from server:", response.data);
            toast.success("Course added successfully!", { position: "bottom-center" });
            clearForm();
        } catch (error) {
            console.error("Error adding course:", error);
            toast.error("Failed to add course. Please try again.", { position: "bottom-center" });
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <Fragment>
            <ToastContainer />
            <Container className="my-5">
                <h1 className="text-center mb-4">Fill Course Detail</h1>
                <Form onSubmit={handleForm} className="shadow p-4 rounded bg-light">
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <label htmlFor="userId">Course Id</label>
                                <Input
                                    type="text"
                                    placeholder="Enter here"
                                    id="userId"
                                    value={course.id}
                                    onChange={(e) => setCourse({ ...course, id: e.target.value })}
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <label htmlFor="title">Course Title</label>
                                <Input
                                    type="text"
                                    placeholder="Enter title here"
                                    id="title"
                                    value={course.title}
                                    onChange={(e) => setCourse({ ...course, title: e.target.value })}
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <label htmlFor="description">Course Description</label>
                        <Input
                            type="textarea"
                            placeholder="Enter description here"
                            id="description"
                            style={{ height: 150 }}
                            value={course.description}
                            onChange={(e) => setCourse({ ...course, description: e.target.value })}
                            required
                        />
                    </FormGroup>
                    <Container className="text-center">
                        <Button type="submit" color="success" disabled={isLoading}>
                            {isLoading ? "Adding..." : "Add Course"}
                        </Button>
                        <Button
                            type="button"
                            color="warning"
                            className="ms-2"
                            onClick={clearForm}
                        >
                            Clear
                        </Button>
                    </Container>
                </Form>
            </Container>
        </Fragment>
    );
};

export default AddCourse;
