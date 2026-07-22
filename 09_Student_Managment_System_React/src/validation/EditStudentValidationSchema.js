import * as yup from "yup";

function editStudentValidationSchema() {
  return yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Minimum 2 characters are required")
      .max(50, "Maximum 50 characters only")
      .required("First name is required"),

    lastName: yup
      .string()
      .min(2, "Minimum 2 characters are required")
      .max(50, "Maximum 50 characters only")
      .required("Last name is required"),

    phoneNumber: yup.string().required("Phone number is required"),
  });
}

export default editStudentValidationSchema;
