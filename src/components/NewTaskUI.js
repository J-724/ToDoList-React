import React, { useState, useEffect} from "react";

const NewTaskUI = () => {
  return (
    <div className="newTaskUI">
      <label htmlFor="NewTaskInput">New Task</label>
      <input type="text" id="NewTaskInput"/>
    </div>
  )
}

export default NewTaskUI;