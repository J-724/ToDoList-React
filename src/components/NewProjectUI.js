import React, { useState, useEffect} from "react";

const NewProjectUI = (props) => {
  return (
    <div className="newProjectUI">
      <label htmlFor="NewProjectInput">New Project</label>
      <input type="text" id="NewProjectInput"/>

      <button type="button" 
        className="addBtn"
        onClick={props.AddProject}
      >
        Add
      </button>
    </div>
  )
}

export default NewProjectUI;
