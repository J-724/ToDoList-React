import React, { useState, useEffect} from "react";

const NewProjectUI = () => {
  return (
    <div>
      <label htmlFor="NewTaskInput">New Task</label>
      <input type="text" id="NewTaskInput"/>
    </div>
  )
}

export default NewProjectUI;