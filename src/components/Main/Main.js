import React, { useState, useEffect} from "react";
import DisplayProjectsInfo from "./DisplayProjectsInfo";
import DisplayTasks from "./DisplayTasks";

const Main = (props) => {
  const taskElements = props.storedTasks[0].map((item) => {
    return (
      <li key={item.id}>
        <DisplayTasks 
          task={item} 
        />
      </li>
    )
  });
  

  return (
    <div className="main">
      <DisplayProjectsInfo />

      Task elements
      {taskElements}

    </div>
  );
}


// {props.storageTest}

export default Main;