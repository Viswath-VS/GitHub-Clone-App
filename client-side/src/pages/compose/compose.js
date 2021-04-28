import React from "react";
import "./compose.scss";
import NavBar from "../../components/navbar/navbar";
import SideBar from "../../components/sidebar/sidebar";
// import EmailList from "../emailList/emailList";

const Compose = () => {
  return (
    <div className="compose-container">
      <NavBar />
      <div className="column-wrapper">
        <SideBar />
        {/* <EmailList /> */}
      </div>
    </div>
  );
};
export default Compose;
