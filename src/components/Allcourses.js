import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../API/Boot_API";
import axios from "axios";
import { toast } from "react-toastify";
import { Spinner } from "reactstrap"; // Importing Spinner for loading state

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        document.title = "All Courses";
        getAllCoursesFromServer();
    }, []);

    const getAllCoursesFromServer = async () => {
        try {
            const response = await axios.get(`${base_url}/courses`);
            console.log(response.data);
            toast.success("Courses have been loaded", { position: "bottom-center" });
            setCourses(response.data);
        } catch (error) {
            console.log(error);
            setError("Failed to load courses. Please try again later."); // Set error message
            toast.error("Something went wrong", { position: "bottom-center" });
        } finally {
            setLoading(false); // Set loading to false after fetch
        }
    };

    const removeCourses = (id) => {
        setCourses(courses.filter((course) => course.id !== id));
    };

    const updateCourses = (updatedCourse) => {
        setCourses(courses.map((course) =>
            course.id === updatedCourse.id ? updatedCourse : course
        ));
    };

    return (
        <div className="text-center">
            <h1 className="my-4">All Courses</h1>
            <p>List of courses are as follows:</p>
            {loading ? ( // Conditional rendering for loading state
                <Spinner color="primary" /> // Loading spinner
            ) : error ? ( // Conditional rendering for error state
                <div className="alert alert-danger">{error}</div>
            ) : courses.length > 0 ? (
                courses.map((item, index) => (
                    <Course key={index} course={item} remove={removeCourses} update={updateCourses} />
                ))
            ) : (
                <div className="alert alert-info">No courses available at the moment.</div> // Improved empty state message
            )}
        </div>
    );
};

export default AllCourses;
