import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FaHome, FaPlus, FaList, FaInfoCircle, FaPhone } from "react-icons/fa"; // Importing icons

const SidebarMenu = () => {
    return (
        <div className="sidebar">
            <h4 className="sidebar-title">Navigation</h4>
            <ListGroup>
                <NavLink className="list-group-item list-group-item-action" to="/" exact activeClassName="active">
                    <FaHome style={{ marginRight: '10px' }} /> Home
                </NavLink>
                <NavLink className="list-group-item list-group-item-action" to="/add-course" activeClassName="active">
                    <FaPlus style={{ marginRight: '10px' }} /> Add Course
                </NavLink>
                <NavLink className="list-group-item list-group-item-action" to="/view-course" activeClassName="active">
                    <FaList style={{ marginRight: '10px' }} /> View Courses
                </NavLink>
                <NavLink className="list-group-item list-group-item-action" to="/about" activeClassName="active">
                    <FaInfoCircle style={{ marginRight: '10px' }} /> About
                </NavLink>
                <NavLink className="list-group-item list-group-item-action" to="/contact" activeClassName="active">
                    <FaPhone style={{ marginRight: '10px' }} /> Contact
                </NavLink>
            </ListGroup>
        </div>
    );
};

export default SidebarMenu;
