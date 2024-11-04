import React from "react";
import { Card, CardBody } from "reactstrap";
import { FaGraduationCap } from "react-icons/fa"; // Importing an icon

function Header({ Name = "User", title = "Course Application" }) {
    return (
        <div>
            <Card className="my-3 bg-warning shadow-sm">
                <CardBody>
                    <div className="text-center py-3">
                        <FaGraduationCap size={40} className="mb-2" /> {/* Icon at the top */}
                        <h1 className="display-4 fw-bold" aria-label="Application title">
                            Welcome to {title}
                        </h1>
                        <h4 className="text-dark mt-2" aria-label="User greeting">
                            {Name}, explore and manage your courses easily!
                        </h4>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;
