import React from "react";
import "./inputField.scss";

const InputField = (props) => {
  return (
    <div className="form-elements">
      <label htmlFor={props.label} style={{display:props.display}}>{props.label}</label>
      <input
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};

export default InputField;
