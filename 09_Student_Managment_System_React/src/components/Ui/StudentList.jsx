import React from "react";
import { Button } from "react-bootstrap";
// import { deleteStudent } from "../../api/studentFetch";
import { deleteStudent } from "../../api/studentAxiousFetch";
import { Navigate, useNavigate } from "react-router-dom";

const StudentList = ({ student, index }) => {

    const navigate = useNavigate()

    const handleDelete = async () => {
        try {
            const data = await deleteStudent(student._id);

            console.log("Deleted Student:", data);

            navigate("/")

            alert("Student Deleted Successfully......!")

        } catch (error) {
            console.error("Delete Error:", error.message);
        }
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.email}</td>
            <td>{student.phoneNumber}</td>
            <td>{student.course}</td>
            <td className="d-flex gap-4">
                {<Button variant="warning">Edit</Button>}
                {<Button variant="danger" onClick={() => handleDelete()}>Delete</Button>}
            </td>
        </tr>
    );
};

export default StudentList;