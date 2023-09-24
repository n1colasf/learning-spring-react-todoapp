import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function LoginComponent() {
  const [username, setUsername] = useState("nicolasf");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();
  const authContext = useAuth();

  function handleUsername(event) {
    //console.log(event.target.value)
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    //console.log(event.target.value)
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (authContext.login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      {showErrorMessage && (
        <div className="errorMessage">Invalid Credentials</div>
      )}
      <h1>Login</h1>
      <div className="LoginForm">
        <div>
          <label>User Name: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginComponent;
