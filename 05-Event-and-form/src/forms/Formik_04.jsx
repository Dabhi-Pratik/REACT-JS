import { Formik, Form, Field } from "formik";
import * as Yup from "yup"

import React from 'react'
import Formik_Error_04 from "./Formik_Error_04"

const Formik_04 = () => {

    const Validation = () => {
        return Yup.object({
            name: Yup.string().min(2, "Minimum 2 character required").max(50, "Can enter maximum 50 character").required("Name is required"),
            email: Yup.string().email("Invalid Email").required("email is required"),
            password: Yup.string().required("Password is Required")
        })
    }

    return (
        <>
            <Formik initialValues={{ name: "", email: "", password: "" }} validationSchema={Validation()} onSubmit={(values, { resetForm }) => {
                console.log("Form Data", values)
                resetForm()
            }} >
                <Form >
                    <Field type="text" name="name" placeholder="Enter Your Name"></Field>
                    <Formik_Error_04 name={"name"}></Formik_Error_04>
                    <br />
                    <br />
                    <br />
                    <Field type="email" name="email" placeholder="Enter Your Email"></Field>
                    <Formik_Error_04 name={"email"}></Formik_Error_04>
                    <br />
                    <br />
                    <br />
                    <Field type="password" name="password" placeholder="Enter Your Password"></Field>
                    <Formik_Error_04 name={"password"}></Formik_Error_04>
                    <br />
                    <br />
                    <br />
                    <button type="submit">ADD</button>

                </Form>
            </Formik>
        </>
    )
}

export default Formik_04