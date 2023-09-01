import React from "react";

export default function TodoApp() {
  return (
    <div>
      Todo Management Aplication
      <LoginComponent />
      <WelcomeComponent />
    </div>
  );
}

function LoginComponent() {
  return (
    <div className="Login">
      <div className="LoginForm">
        <div>
          <label>User Name: </label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" />
        </div>
        <button>Login</button>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  return <div>Welcome Comnponent</div>;
}
