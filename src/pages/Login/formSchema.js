import * as yup from "yup";

const AuthSchema = yup.object({
  username: yup.string().required("please enter a username"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email address"),
  password: yup.string().required("Please enter a password"),
});

export default AuthSchema;
