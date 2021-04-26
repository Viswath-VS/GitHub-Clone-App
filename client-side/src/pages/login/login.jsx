import React from "react";
import "./login.scss";
import Form from "../../components/forms/form";
const Login = () => {
  return (
    <div className="login-container">
      <div className="input-group header-box">
        <div className="img-wrapper">
          <img src="githubLogo.png" alt="not found" />
        </div>
        <div className="title-wrapper">
          <h1>Login</h1>
        </div>
      </div>
      <Form type="login" />
      <div className="input-group signup">
        <p>new user? <span> <a href="/signup">Signup</a></span></p>
      </div>
    </div>
  );
};
export default Login;
