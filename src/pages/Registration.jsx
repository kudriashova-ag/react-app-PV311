import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Registration = () => {
    const [viewPassword, setViewPassword] = useState("password");

    const navigate = useNavigate();

    const toggleViewPassword = () => {
      viewPassword === "password"
        ? setViewPassword("text")
        : setViewPassword("password");
    }

  const onSubmit = (values, formBag) => {
    // відправляємо данні на сервер  axios.post(url, values);
      console.log(values);
      formBag.resetForm();
      navigate("/");
  };

  return (
    <div>
      <h1>Registration</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signupSchema}
      >
        {() => (
          <Form>
            <div>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" className="invalid" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="invalid" />
            </div>
                      <div>
                          
              <div className="password">
                  <Field
                    type={viewPassword}
                    name="password"
                    placeholder="Password"
                  />
                  <div onClick={toggleViewPassword}>
                   {viewPassword === "password" ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </div>
              </div>

              <ErrorMessage
                name="password"
                component="div"
                className="invalid"
              />
            </div>
            <div>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="invalid"
              />
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
