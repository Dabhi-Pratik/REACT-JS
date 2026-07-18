import { Form, Button, Col, InputGroup, Row } from "react-bootstrap";
import * as formik from 'formik';
import studentValidationSchema from "../../validation/studentValidationSchema";


function AddStudent() {
    const { Formik } = formik;

    return (
        <Formik
            validationSchema={studentValidationSchema}
            onSubmit={(values, { resetForm }) => {
                console.log("Form Data", values)
                resetForm()
            }}
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                course: '',
                terms: false,
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
                        <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Your Email"
                                    aria-describedby="inputGroupPrepend"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </InputGroup>
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
                        <Form.Group as={Col} md="3" controlId="validationFormik04">
                            <Form.Label>Course</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter course"
                                name="course"
                                value={values.course}
                                onChange={handleChange}
                                isInvalid={!!errors.course}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.course}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            name="terms"
                            label="Agree to terms and conditions"
                            onChange={handleChange}
                            isInvalid={!!errors.terms}
                            feedback={errors.terms}
                            feedbackType="invalid"
                            id="validationFormik0"
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    );
}

export default AddStudent;