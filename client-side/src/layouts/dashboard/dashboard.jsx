import React from "react";
import "./dashboard.scss";
import Section from "../../pages/emailList/emailSection/emailSection";
import NavBar from "../../components/navbar/navbar";
import SideBar from "../../components/sidebar/sidebar";
import Inbox from "@material-ui/icons/Inbox";
import People from "@material-ui/icons/People";
import LocalOffer from "@material-ui/icons/LocalOffer";

const DashBoard = ({ children }) => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="column-wrapper">
        <SideBar />
        <div className="email-list">
          <div className="section-list">
            <Section Icon={Inbox} title="Inbox" color="red" />
            <Section Icon={People} title="Repositories" color="blue" />
            <Section Icon={LocalOffer} title="Packages" color="green" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
