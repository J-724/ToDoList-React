import React, { useState, useEffect} from "react";
import DisplayProjectsInfo from "./DisplayProjectsInfo";

const Main = (props) => {

  return (
    <div className="main">
      <DisplayProjectsInfo />
    </div>
  );
}


// {props.storageTest}

export default Main;