import React, { useState } from 'react';
import Navbar from "./Navbar";
import Signform2 from './SignForm2';
import { Link } from "react-router-dom";
export default function Signform() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });
  const [choose, setChoose] = useState(true)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <>
      <Navbar />
      <form className={`form-container ${choose ? "flex" : "hidden"}`} onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label className='text-3xl'>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <Link to="/signform3">
            {" "}
            <button className="button1">Next</button>
          </Link>
    </form>
    {choose ? "" : <Signform2/>}
    </>
  );
};

