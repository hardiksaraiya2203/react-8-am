import React from "react";
import { Formik, Field, Form } from "formik";

const FormikForm = () => {
  return (
    <div>
      {
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <label htmlFor="email">email</label>
            <Field type="email" id="email" name="email" placeholder="email" />

            <label htmlFor="password">Last Name</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />

            <input type="submit" value="Submit" />
          </Form>
        </Formik>
      }
    </div>
  );
};

export default FormikForm;
