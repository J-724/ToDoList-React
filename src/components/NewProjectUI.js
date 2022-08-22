import React, { useState, useEffect} from "react";

const NewProjectUI = (props) => {
  return (
    <div className="newProjectUI">
      <div className="newProjectUI-item">
        <label htmlFor="NewProjectInput">New Project</label>
        <input type="text" id="NewProjectInput"/>
      </div>
      <button className="newTaskUI-item">
        <label htmlFor="TaskPriority">Color</label>
        <select name="TaskPriority" id="TaskPriority">
          <option value="1">None</option>
        </select>
      </button >
      <div className="button-container">
        <CancelButton 
          target={"newProjectUI"}
          changeVisibility={props.changeVisibility}
        />
        <AddButton 
          name="Add Task"
          handleAdd={props.AddProject} 
        />
      </div>
    </div>
  )
}

export default NewProjectUI;
