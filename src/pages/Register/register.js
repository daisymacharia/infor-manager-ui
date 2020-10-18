import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import AuthSchema from "../Login/formSchema";
import { PageLayout, Input, Button } from "../../components";
import { LoginPage, ButtonsSection } from "../Login/styles";
import { registerUser } from "../../store/thunks/user";

function Register() {
  const dispatch = useDispatch();
  const {
    data: { status },
  } = useSelector((state) => state.user);

  useEffect(
    () => {
      if (status === "ERROR") {
        toast.error("Username / email already taken", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [status]
  );

  const handleSubmit = (data) => {
    dispatch(registerUser(data));
  };
  // Error: Request failed with status code 400

  return (
    <PageLayout>
      {status === "ERROR" && (
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
      <LoginPage>
        <h1>Create New Account</h1>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={AuthSchema}
          validateOnChange={false}
        >
          {({ touched, values, errors }) => (
            <>
              <Input
                placeholder="Enter username"
                name="username"
                value={values.username}
                error={errors.username}
                validate={AuthSchema.username}
                label="Username"
              />
              <Input
                placeholder="Enter email"
                name="email"
                value={values.email}
                error={errors.email}
                validate={AuthSchema.email}
                label="Email"
              />
              {errors.email && touched.email && errors.email}
              <Input
                type="password"
                placeholder="Enter password"
                name="password"
                value={values.password}
                error={errors.password}
                validate={AuthSchema.password}
                label="Password"
              />
              {errors.password && touched.password && errors.password}
              <ButtonsSection>
                <Button
                  type="submit"
                  text={status === "FETCHING" ? "Loading..." : "Register"}
                  width="150px"
                  onClick={() => handleSubmit(values)}
                />
              </ButtonsSection>
            </>
          )}
        </Formik>
      </LoginPage>
    </PageLayout>
  );
}

export default Register;
