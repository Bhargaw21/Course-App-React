import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);

        // Simulate successful submission
        if (formData.name && formData.email && formData.message) {
            setSuccess(true);
            setError(false);
            // Reset form data
            setFormData({ name: '', email: '', message: '' });
        } else {
            setError(true);
            setSuccess(false);
        }
    };

    return (
        <Container className="my-5">
            <Row>
                <Col md={{ size: 6, offset: 3 }}>
                    <h1 className="text-center mb-4">Contact Us</h1>
                    {success && <Alert color="success">Your message has been sent!</Alert>}
                    {error && <Alert color="danger">Please fill in all fields.</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Message</Label>
                            <Input
                                type="textarea"
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Enter your message"
                                style={{ height: '150px' }}
                            />
                        </FormGroup>
                        <Button type="submit" color="primary" className="w-100">Send Message</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
