import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email address"),
  password: yup.string().required("Please enter a password for your account"),
});

export default loginSchema;
