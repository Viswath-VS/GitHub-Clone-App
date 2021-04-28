import React from "react";
import "./sidebaroption.scss";
import { useHistory } from "react-router-dom";

const SideBarOption = ({ Icon, name, number, selected, path }) => {
  const history = useHistory();
  return (
    <div className="sidebar-options" onClick={()=> history.push(path)}>
      <Icon />
      <h3>{name}</h3>
      <p className={`number ${selected && "number--active" }`}>{number}</p>
    </div>
  );
};

export default SideBarOption;
