import React from "react";
import "./sidebar.scss";
import SideBarOption from "./sidebarOptions/sidebaroption";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from "@material-ui/icons/Delete";
import TimeIcon from "@material-ui/icons/AccessTime";
import LabelIcon from "@material-ui/icons/LabelImportant";
import { useHistory } from "react-router-dom";

const SideBar = () => {
  const history = useHistory();
  return (
    <div className="sidebar">
      <button
        onClick={() => history.push("/compose")}
        className="compose-button"
      >
        <AddIcon /> <span>Compose</span>
      </button>
      <SideBarOption Icon={InboxIcon} name="Inbox" number="8" selected={true} path="/"/>
      <SideBarOption
        Icon={StarIcon}
        name="Starred"
        number="12"
        selected={false}
      />
      <SideBarOption
        Icon={DeleteIcon}
        name="Bin"
        number="10"
        selected={false}
      />
      <SideBarOption
        Icon={TimeIcon}
        name="Snooze"
        number="9"
        selected={false}
      />
      <SideBarOption
        Icon={LabelIcon}
        name="Important"
        number="22"
        selected={false}
      />
    </div>
  );
};

export default SideBar;
