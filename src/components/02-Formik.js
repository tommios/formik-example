// Method 2: Using Formik with React context

import React from "react";
import {Formik, Field, Form} from "formik";
import * as Yup from "yup";

function FormikRenderProps() {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        password: Yup.string()
            .min(8, "Must be more than 8 characters")
            .required("Required")
    });

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, errors) => {
                console.log("values====>",values);
                console.log("errors====>",errors);
            }}>
            {({errors, touched}) => (
                <Form
                    className="baseForm"
                    noValidate>
                    <Field
                        type="email"
                        name="email"
                    />
                    {errors.email && touched.email ? (
                        <div>{errors.email}
                        </div>) : null}

                    <Field
                        type="text"
                        name="password"
                    />
                    {errors.password && touched.password ? (
                        <div>{errors.password}
                        </div>) : null}

                    <button type="submit">
                        Submit
                    </button>
                </Form>
            )
            }

        </Formik>
    );
}

export default FormikRenderProps;