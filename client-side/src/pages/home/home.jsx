import React from "react";
import "./home.scss";
import DashBoard from "../../layouts/dashboard/dashboard";

import EmailList from "../emailList/emailList";

const Home = () => {
  return (
    <DashBoard>
      <EmailList />
    </DashBoard>
  );
};
export default Home;
