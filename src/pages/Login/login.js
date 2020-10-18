import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import AuthSchema from "./formSchema";
import { PageLayout, Input, Button } from "../../components";
import { LoginPage, ButtonsSection } from "./styles";
import { loginUser } from "../../store/thunks/user";

function Login() {
  const dispatch = useDispatch();
  const {
    data: { status },
  } = useSelector((state) => state.user);

  useEffect(
    () => {
      if (status === "ERROR") {
        toast.error("User does not exist", {
          position: "top-right",
          autoClose: 2000,
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
    dispatch(loginUser(data));
  };

  return (
    <PageLayout>
      {status === "ERROR" && <ToastContainer />}
      <LoginPage>
        <h1>Welcome Back</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={AuthSchema}
          validateOnChange={false}
        >
          {({ touched, values, errors }) => (
            <>
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
                  text={status === "FETCHING" ? "Loading..." : "Login"}
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

export default Login;
