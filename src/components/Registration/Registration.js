import React, { useState } from "react";

import axios from "axios"; // You will need axios or a similar library for HTTP requests

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform client-side form validation (you can add more validation rules)

    if (
      !formData.name ||
      !formData.role ||
      !formData.email ||
      !formData.password
    ) {
      setError("All fields are required.");
      return;
    }
    // Make a POST request to your backend for user registration
    // axios
    //   .post("/api/register", formData)
    //   .then((response) => {
    //     setSuccessMessage("Registration successful. You can now log in.");
    //     setError("");
    //   })
    //   .catch((error) => {
    //     if (
    //       error.response &&
    //       error.response.data &&
    //       error.response.data.message
    //     ) {
    //       setError(error.response.data.message);
    //     } else {
    //       setError("An error occurred during registration.");
    //     }
    //   });
  };

  return (
    <div className="bg-dark login d-flex flex-column justify-content-center align-items-center">
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <form
        className="card bg-secondary d-flex flex-column justify-content-center align-items-center w-50 h-50"
        onSubmit={handleSubmit}
      >
        <h2>Register</h2>
        <div className="p-2 d-flex justify-content-center align-items-center">
          <label className="m-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="p-2 d-flex justify-content-center align-items-center">
          <label className="m-2" htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="p-2 d-flex justify-content-center align-items-center">
          <label className="m-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="p-2 d-flex justify-content-center align-items-center">
          <label className="m-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary m-2" type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
