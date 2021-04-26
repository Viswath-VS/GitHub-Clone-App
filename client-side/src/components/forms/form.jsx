import React from "react";
import "./form.scss";
import Button from "../button/button";
import InputField from "../inputfield/inputField";
const Form = (props) => {
  if (props.type === "login") {
    return (
      <div className="input-group user-form">
        <form className="input-form">
          <InputField
            label="Username"
            type="text"
            name="username"
            placeholder="username"
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="password"
          />

          <div className="input-group footer-box">
            <Button name="Login" />
          </div>
        </form>
      </div>
    );
  } else if (props.type === "signup") {
    return (
      <div className="input-group user-form">
        <form className="input-form">
          <InputField
            label="Username"
            type="text"
            name="username"
            placeholder="username"
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="password"
          />

          <div className="input-group footer-box">
            <Button name="Sign Up" />
          </div>
        </form>
      </div>
    );
  } else {
    return <h1>Invalid form input </h1>;
  }
};
export default Form;
