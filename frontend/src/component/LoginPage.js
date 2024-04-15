import React from 'react'
import { useState } from 'react'
import SignUp from './SignUp';
import axios from 'axios';
import * as Yup from "yup";
import { useFormik } from 'formik';

export default function LoginPage() {

  const [login, setLogin] = useState(true);

  const handleClick = () => {
    setLogin(!login);
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please enter the email"),
      password: Yup.string().min(6).required("Please enter the password"),
    }),
    onSubmit: async (values) => {
      try {
        // Call server API to send the data
        console.log(values.enrollment, values.password);
        await axios.post("http://localhost:8080/auth/api/login", {
          email: values.email,
          password: values.password,
        })
        console.log("Successfully login");
        alert("Successfully login");

        // Clear the form fields after submission
        formik.resetForm();
      } catch (error) {
        console.log(error);
        alert("An error occurred while submitting the form.");
      }
    },
  });

  return (
    <>
      <div>

        {" "} {login ? (


          <div className="column">
            <form action="login" onSubmit={formik.handleSubmit}>
              <div className='containerL'>
                <div className="headingL">
                  <h1>Login </h1>
                </div>
                <input type="email" className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.enrollment}
                  id="email" autoComplete="off" name='email' placeholder="E mail" />
                {formik.touched.enrollment && formik.errors.enrollment ? (
                  <div style={{fontSize:"10px", color:"red",marginLeft:"20px",marginBottom:"20px"}}>{formik.errors.enrollment}</div>
                ) : null}

                <input type="password" className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  id="floatingInput" autoComplete="off" name='password' placeholder="Password" />
                {formik.touched.password && formik.errors.password ? (
                  <div style={{fontSize:"10px", color:"red",marginLeft:"20px",marginBottom:"20px"}}>{formik.errors.password}</div>
                ) : null}

                <div className="column">
                  <div className="button">
                    <button className="btn " type="submit">Login</button>
                    <span style={{ cursor: "pointer", alignItem: "left", color: "blue", textDecoration: "underline" }} onClick={handleClick}>Create Account</span>
                  </div>
                </div>
              </div>
            </form>
          </div>

        ) : (<SignUp />)}

      </div>
    </>
  )
}
