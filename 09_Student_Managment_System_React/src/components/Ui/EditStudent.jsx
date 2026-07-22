import { Form, Button, Col, InputGroup, Row } from "react-bootstrap";
import * as formik from 'formik';
import studentValidationSchema from "../../validation/studentValidationSchema";
// import { addStudent } from "../../api/studentFetch";
import { addStudent } from "../../api/studentAxiousFetch";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { editStudent } from "../../api/studentFetch";
import { editStudent } from "../../api/studentAxiousFetch";
import editStudentValidationSchema from "../../validation/EditStudentValidationSchema";


function EditStudent() {
    const { Formik } = formik;

    const navigate = useNavigate()

    const { state } = useLocation()

    if (!state) {
        return <h3>Student data not found</h3>;
    }
    const studentId = state._id

    return (
        <Formik
            validationSchema={editStudentValidationSchema}
            onSubmit={async (values, { resetForm }) => {
                try {
                    await editStudent(studentId, values);
                    alert("Student Updated Successfully!");
                    resetForm();
                    navigate("/")
                } catch (err) {
                    alert(err.message);
                }
            }}
            initialValues={{
                firstName: state.firstName || "",
                lastName: state.lastName || "",
                phoneNumber: state.phoneNumber || "",
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                isValid={touched.firstName && !errors.firstName}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isValid={touched.lastName && !errors.lastName}
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFormik03">
                            <Form.Label>phoneNumber</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your phone Number"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                isInvalid={!!errors.phoneNumber}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.phoneNumber}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Update</Button>
                </Form>
            )}
        </Formik>
    );
}

export default EditStudent;