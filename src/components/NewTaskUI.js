import React, { useState, useEffect} from "react";
import { AddButton, CancelButton } from "./#Misc/BtnsAddDel";

const NewTaskUI = (props) => {
  return (
    <>
      <form className="newTaskUI">
        <div className="newTaskUI-item">
          <label htmlFor="TaskName">New Task</label>
          <input type="text" id="TaskName" name="TaskName" placeholder="Task Name"/>
        </div>
        <div className="newTaskUI-item">
          <label htmlFor="TaskInfo">Description</label>
          <textarea name="TaskInfo" id="TaskInfo" placeholder="Description"/>
        </div>
        <div className="newTaskUI-item-container">
          <button className="newTaskUI-item">
            <label htmlFor="TaskDueDate">Due Date</label>
            <input type="date" id="TaskDueDate" name="TaskDueDate"/>
          </button >
          <button className="newTaskUI-item">
            <label htmlFor="TaskPriority">Project</label>
            <select name="TaskPriority" id="TaskPriority">
              <option value="1">Project 1</option>
            </select>
          </button >
          <button className="newTaskUI-item">
            <span>
              Important
            </span>
          </button>
        </div>
      </form>
      <div className="button-container">
        <CancelButton 
          id={props.id}
          target={"newTaskUI"}
          changeVisibility={props.changeVisibility}
        />
        <AddButton handleAdd={props.AddTask} name="Add Task"/>
      </div>
    </>
  )
}

export default NewTaskUI;