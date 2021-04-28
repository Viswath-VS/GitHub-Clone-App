import React from "react";
import "./emailList.scss";
import EmailRows from "./emailRows/emailRows";
import Section from "./emailSection/emailSection";
import Inbox from "@material-ui/icons/Inbox";
import People from "@material-ui/icons/People";
import LocalOffer from "@material-ui/icons/LocalOffer";

const EmailList = () => {
  return (
    <div className="email-list">
      <div className="section-list">
        <Section Icon={Inbox} title="Primary" color="red" />
        <Section Icon={People} title="Social" color="blue" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="email-rows">
        <EmailRows
          id="1"
          title="VS8"
          subject="complete registration for your Account complete registration for your Accountt"
        />
         <EmailRows
          id="1"
          title="VS8"
          subject="complete registration for your Account"
        />
      </div>
    </div>
  );
};

export default EmailList;
