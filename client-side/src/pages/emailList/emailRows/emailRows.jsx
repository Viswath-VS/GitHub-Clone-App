import React from "react";
import "./emailRows.scss";
import StarIcon from "@material-ui/icons/StarOutlineOutlined";
import LabelIcon from "@material-ui/icons/LabelImportantOutlined";
import CheckBox from "@material-ui/icons/CheckBoxOutlineBlankOutlined";

const EmailRows = ({ id, title, subject, description, time }) => {
  return (
    <div className="rows">
      <div className="icons">
        <CheckBox />
        <StarIcon />
        <LabelIcon />
      </div>
      <div className="message">
        <h3>{title}</h3>
        <h4>{subject}</h4>
      </div>
    </div>
  );
};
export default EmailRows;
