import React from "react";
import "./signup.scss";
import Form from "../../components/forms/form";
const Signup = () => {
  return (
    <div className="signup-container">
      <div className="input-group header-box">
        <div className="img-wrapper">
          <img src="githubLogo.png" alt="not found" />
        </div>
        <div className="title-wrapper">
          <h1>Sign Up</h1>
        </div>
      </div>
      <Form type="signup" />
      <div className="input-group signup">
        <p>already user? <span> <a href="/login">Login</a></span></p>
      </div>
    </div>
  );
};
export default Signup;