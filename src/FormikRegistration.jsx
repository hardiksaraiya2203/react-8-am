import React from "react";
import { Formik, Field, Form } from "formik";

const FormikRegistration = () => {
  return (
    <div>
      {
        <Formik
          initialValues={{
            email: "",
            password: "",
            firstName: "",
            title: "",
            lastName: "",
            confirmPassword: "",
            acceptTerms: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <label htmlFor="firstName">firstName</label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
            />
            <label htmlFor="lastName">Last Name</label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
            />

            <label htmlFor="title">title</label>
            <Field 
            type="text" 
            id="title" 
            name="title" 
            />

            <label htmlFor="email">email</label>
            <Field type="email" id="email" name="email"  />

            <label htmlFor="password">password</label>
            <Field
              type="password"
              id="password"
              name="password"
            />

            <label htmlFor="confirmPassword">confirmPassword</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <label htmlFor="acceptTerms">acceptTerms</label>
            <Field type="checkbox" />

            <input type="submit" value="Submit" />
          </Form>
        </Formik>
      }
    </div>
  );
};

export default FormikRegistration;
