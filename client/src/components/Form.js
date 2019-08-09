import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegForm = ({values, errors, touched}) => {

    return(
        <div className="form">
            <Form>
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type="username" name="username" placeholder="Username"/>

                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password"/>


                <button type="submit">Register</button>
            </Form>
        </div>
    )
  

};
const FormikRegForm = withFormik({
    mapPropsToValues(values){
        return {
            username: values.username || "",
            password: values.password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("username is required"),
        password: Yup.string().min(6, "password must be 6 characters or longer").required("password is required")
    }),
    handleSubmit(values){
        console.log(values);
        axios.post("http://localhost:5000/api/register", values)
            .then(res => {
                console.log("this is my response", res.data)
            })
            .catch(err => console.log("there is an error", err.response))
        
    }
})(RegForm);


export default FormikRegForm;