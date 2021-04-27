import React from "react";
import "./navbar.scss";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const NavBar = () => {
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon className="menu" />
        <img src="githubLogo.png" alt="" />
      </div>
      <div className="header-middle">
        <SearchIcon className="search" />
        <input className="search-bar" placeholder="Search" type="text" />
      </div>
      <div className="header-right">
        <AppsIcon className="apps" />
        <p>Hey viswath,</p>
        <a href="/login">Logout</a>
      </div>
    </div>
  );
};
export default NavBar;
