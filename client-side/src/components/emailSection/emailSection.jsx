import React from "react";
import "./emailSection.scss";
import { useHistory } from "react-router-dom";

const Section = ({ Icon, title, color, path }) => {
  const history = useHistory();
  return (
    <div
      className="section-container"
      onClick={()=> history.push(path)}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default Section;
