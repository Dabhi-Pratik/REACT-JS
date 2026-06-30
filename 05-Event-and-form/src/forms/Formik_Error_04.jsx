import React from 'react'
import { ErrorMessage } from "formik";

const Formik_Error_04 = ({ name }) => {
    return (
        <>

            <ErrorMessage name={name}>{msg => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>
        </>
    )
}

export default Formik_Error_04