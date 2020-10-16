import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import AuthSchema from "../Login/formSchema";
import { PageLayout, Input, Button } from "../../components";
import { LoginPage, ButtonsSection } from "../Login/styles";
import { registerUser } from "../../store/thunks/user";

function Register() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const handleSubmit = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <PageLayout>
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
                  text={loading ? "Loading..." : "Register"}
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
