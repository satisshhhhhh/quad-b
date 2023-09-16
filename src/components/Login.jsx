import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
