import React, { useState, useEffect} from "react";

const DisplayTasks = (props) => {
  console.log(props.task)
  const   { project, name, description, date, important } = props.task;

  return (
    <div className="task-item" > 
      <button 
        className="task-item-checkbox"
        type="button" 
        role="chexbox"
      >
        Check
      </button>

      <div className="task-item-data">
        <div className="task-item-tilte">{props.task.name}</div>
        <div className="task-item-description">{description}</div>
      </div>

      <button 
        className="task-item-tools edit-button"
      >
        Edit
      </button>

    </div>
  )  
}

export default DisplayTasks;