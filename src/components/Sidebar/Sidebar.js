import React, { useState, useEffect} from "react";
import UserInfo from "./UserInfo";
import SearchBar from "./SearchBar";
import Shortcuts from "./Shortcuts";
import DisplayProjects from "./DisplayProjects";
import NewProject from "./NewProject";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <UserInfo />
      <SearchBar />
      <Shortcuts />
      <DisplayProjects />
      <NewProject />
    </div>
  );
}

export default Sidebar;