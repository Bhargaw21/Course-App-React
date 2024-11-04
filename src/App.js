import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from "reactstrap"; 
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import SidebarMenu from './components/SidebarMenu';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';

function App() {
    return (
        <div>
            <Router>
                <ToastContainer />
                <Header />
                <Container>
                    <Row>
                        <Col md={4}>
                            <SidebarMenu />
                        </Col>
                        <Col md={8}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/add-course" element={<AddCourse />} />
                                <Route path="/view-course" element={<Allcourses />} />
                                <Route path="/contact"  element={<Contact />}/>
                                <Route path="/about"  element={<About />}/>
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default App;
