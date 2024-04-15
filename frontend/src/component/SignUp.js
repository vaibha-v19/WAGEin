import React, { useEffect } from 'react'
import { useState } from 'react'
import LoginPage from './LoginPage';
import axios from 'axios';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { Link } from "react-router-dom";


export default function SignUp() {

    const [SignUp, setSignUp] = useState(true);

    const handleClick = () => {
        setSignUp(!SignUp);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().min(3).max(11).required("Please enter the name"),
            email: Yup.string().min(6, 'Enrollment must be at least 6').required("Please enter the enrollment"),
            password: Yup.string().min(6).required("Please enter the password"),
        }),

        onSubmit: async (values, { resetForm }, e) => {
            try {
                // Prevent the default form submission behavior
                e.preventDefault();
        
                // Call server API to send the data
                console.log(values.name, values.enrollment, values.branch, values.semester, values.password);
                await axios.post('http://localhost:8080/auth/api/register', {
                    username: values.name,
                    email: values.email,
                    password: values.password,
                })
                console.log("Successfully login");
                alert("Successfully Register");
        
                // Clear the form fields after submission
                resetForm();
            } catch (error) {
                console.log(error);
                alert("An error occurred while submitting the form.");
            }
        },
        
        
    });



    return (
        <>

            <div>

                {" "} {SignUp ? (

                    <div className="cardsignup">
                        <div className="column">
                            <form action="" onSubmit={formik.handleSubmit}>
                                <div className="containerS">
                                    <div className="headingS">
                                        <h1>Sign Up </h1>
                                    </div>
                                    <input type="text" className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        id="name" autoComplete="off" name='name'  pattern="^[a-zA-Z]+$"  title="Please enter only alphabate" placeholder="Name" />
                                    <span>
                                        {formik.touched.name && formik.errors.name ? (
                                            <div style={{ fontSize: "10px", color: "red", marginLeft: "40px", marginBottom: "7px" }}>{formik.errors.name}</div>
                                        ) : null}
                                    </span>


                                    <input type="email" className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.enrollment}
                                        id="floatingInput1" autoComplete="off" name='email'  title="Please enter only Number" placeholder="E mail" />
                                    {formik.touched.enrollment && formik.errors.enrollment ? (
                                        <div style={{ fontSize: "10px", color: "red", marginLeft: "40px", marginBottom: "7px" }}>{formik.errors.enrollment}</div>
                                    ) : null}


                                    <input type="password" className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        id="floatingInput" autoComplete="off" name='password' placeholder="Password" />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div style={{ fontSize: "10px", color: "red", marginLeft: "40px", marginBottom: "7px" }}>{formik.errors.password}</div>
                                    ) : null}

                                    <div className="column">
                                        <div className="button">
                                        <Link to="/signform">
                                            {" "}
                                            <button className="btn " type="submit">SignUp</button>
                                        </Link>
                                            
                                            <span style={{ cursor: "pointer", alignItem: "left", color: "blue", textDecoration: "underline" }} onClick={handleClick}>Already have Account</span>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                ) : (<LoginPage />)}

            </div>
        </>
    )
}

