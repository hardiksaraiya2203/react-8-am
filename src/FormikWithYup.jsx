import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikWithYup = () => {
  const validationSchema = () => {
    return Yup.object().shape({
      firstName: Yup.string().required("firstName is required"),
      lastName: Yup.string().required("lastName is required"),
      title: Yup.string().required("title is required"),
      email: Yup.string().required("email is required"),
      password: Yup.string()
        .required("password is required")
        .min(6, "minimum 6 characters required")
        .max(15, "minimum 6 characters required"),
      confirmPassword: Yup.string()
        .required("password is required")
        .oneOf(
          [Yup.ref("password"), null],
          "confirmPassword does not march password"
        ),
      acceptTerms: Yup.bool().oneOf([true], "Accept terms must be checked"),
    });
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          title: "",
          email: "",
          password: "",
          confirmPassword: "",
          acceptTerms: "",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="form-group">
            <label>firstName</label>
            <Field name="firstName" type="text" className="form-control" />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group">
            <label>lastName</label>
            <Field name="lastName" type="text" className="form-control" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group">
            <label>title</label>
            <Field name="title" type="text" className="form-control" />
            <ErrorMessage
              name="title"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group">
            <label>email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group">
            <label>password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group">
            <label>confirmPassword</label>
            <Field
              name="confirmPassword"
              type="password"
              className="form-control"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group form-check">
            <label htmlFor="acceptTerms" className="form-check-label">
              I have read and agreed to the Terms
            </label>
            <Field
              name="acceptTerms"
              type="checkbox"
              className="form-check-input"
            />
            <ErrorMessage
              name="acceptTerms"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikWithYup;
