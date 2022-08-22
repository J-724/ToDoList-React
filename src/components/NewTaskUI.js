import React, { useState, useEffect} from "react";
import { AddButton, CancelButton } from "./#Misc/buttons";

const NewTaskUI = (props) => {
  const task = props.storedTask;
  if (props.purpose === "add") {
    task = "";
  }else if (props.purpose === "edit") {
    task = props.storedTask;
  }



  return (
    <>
      <form className="newTaskUI">
        <div className="newTaskUI-item">
          <label htmlFor="TaskName">New Task</label>
          <input type="text" 
            id="TaskName" 
            name="TaskName" 
            placeholder="Task Name" 
            value={""}

            onChange={()=>{}}
          />
        </div>
        <div className="newTaskUI-item">
          <label htmlFor="TaskInfo">Description</label>
          <textarea 
            id="TaskInfo" 
            name="TaskInfo" 
            placeholder="Description" 
            value={""}
            
            onChange={()=>{}}
          />
        </div>
        <div className="newTaskUI-item-container">
          <button className="newTaskUI-item">
            <label htmlFor="TaskDueDate">Due Date</label>
            <input type="date" 
              id="TaskDueDate" 
              name="TaskDueDate" 
              value={""}
              
              onChange={()=>{}}
            />
          </button >
          <button className="newTaskUI-item">
            <label htmlFor="TaskPriority">Project</label>
            <select 
              name="TaskPriority" 
              id="TaskPriority" 
              value={""}
            
              onChange={()=>{}}
            >
              <option value="1">Project 1</option>
            </select>
          </button >
          <button className="newTaskUI-item" 
            value={""}
          
            onChange={()=>{}}
          >
            <span>
              Important
            </span>
          </button>
        </div>
      </form>

      
      <div className="button-container">
        <CancelButton 
          target={"newTaskUI"}
          changeVisibility={props.changeVisibility}
        />
        <AddButton handleAdd={props.AddTask} name="Add Task"/>
      </div>
    </>
  )
}

export default NewTaskUI;