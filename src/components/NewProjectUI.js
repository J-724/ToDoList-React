import React, { useState, useEffect} from "react";

const NewProjectUI = () => {
  return (
    <div>
      <label htmlFor="NewProjectInput">New Project</label>
      <input type="text" id="NewProjectInput"/>
    </div>
  )
}

export default NewProjectUI;
