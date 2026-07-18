import React from "react";

const StudentList = ({ student, index }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.email}</td>
            <td>{student.phoneNumber}</td>
            <td>{student.course}</td>
        </tr>
    );
};

export default StudentList;