import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios"; // You will need axios or a similar library for HTTP requests

function LoginForm() {
  //   const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform client-side form validation (you can add more validation rules)
    if (!formData.email || !formData.password) {
      setError("Both email and password are required.");
      return;
    }
    // Make a POST request to your backend for user login
    // axios
    //   .post("/api/login", formData)
    //   .then((response) => {
    //     const { token } = response.data;
    //     // Save the token in local storage
    //     localStorage.setItem("token", token);
    //     // Redirect to the Chat Area on successful login
    //     history.push("/chat");
    //   })
    //   .catch((error) => {
    //     if (
    //       error.response &&
    //       error.response.data &&
    //       error.response.data.message
    //     ) {
    //       setError(error.response.data.message);
    //     } else {
    //       setError("An error occurred during login.");
    //     }
    //   });
  };

  return (
    <div className="login bg-dark d-flex flex-column justify-content-center align-items-center">
      {error && <div className="error">{error}</div>}
      <form
        className="card bg-secondary d-flex flex-column justify-content-center align-items-center w-50 h-50"
        onSubmit={handleLogin}
      >
        <h2>Login</h2>
        <div className="p-3 d-flex justify-content-space-evenly align-items-center">
          <label className="m-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="p-3 d-flex justify-content-space-evenly align-items-center">
          <label className="m-2" htmlFor="password">Password</label>
          <input
            type="password"
            className="w-20"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary pl-2 pr-2 m-2" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
