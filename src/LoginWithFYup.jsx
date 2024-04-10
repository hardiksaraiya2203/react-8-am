import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginWithFYup = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  const Validation = () => {
    return Yup.object().shape({
      email: Yup.string().required("email must be filled"),
      password: Yup.string()
        .required("password must be filled")
        .min(6, "minimum 6 characters required")
        .max(15, "maximum 15 characters required"),
    });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Validation}
      >
        <Form>
          <div className="form-group">
            <label>Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginWithFYup;
