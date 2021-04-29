import React from "react";
import "./button.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
const Button = ({ name, type, color }) => {
  const { loginWithRedirect } = useAuth0();
  const history = useHistory();
 
    return (
      <button
        onClick={() => history.push('/')}
        style={{ backgroundColor: { color } }}
        type={type}
        className="custom-button"
      >
        {name}
      </button>
    );


};

export default Button;
