import * as yup from "yup";

function studentValidationSchema() {
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

    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),

    phoneNumber: yup.string().required("Phone number is required"),

    course: yup.string().required("Course is required"),

    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });
}

export default studentValidationSchema;
