import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import loginSchema from "./formSchema";
import { PageLayout, Input, Button } from "../../components";
import { LoginPage, ButtonsSection } from "./styles";
import { loginUser } from "../../store/thunks/user";

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <PageLayout>
      <LoginPage>
        <h1>Welcome Back</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          validateOnChange={false}
        >
          {({ touched, values, errors }) => (
            <>
              <Input
                placeholder="Enter email"
                name="email"
                value={values.email}
                error={errors.email}
                validate={loginSchema.email}
                label="Email"
              />
              {errors.email && touched.email && errors.email}
              <Input
                type="password"
                placeholder="Enter password"
                name="password"
                value={values.password}
                error={errors.password}
                validate={loginSchema.password}
                label="Password"
              />
              {errors.password && touched.password && errors.password}
              <ButtonsSection>
                <Button
                  type="submit"
                  text="Submit"
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
