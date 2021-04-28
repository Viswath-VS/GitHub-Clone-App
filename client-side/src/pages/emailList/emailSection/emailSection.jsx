import React from "react";
import "./emailSection.scss";

const Section = ({ Icon, title, color }) => {
  return (
    <div
      className="section-container"
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
