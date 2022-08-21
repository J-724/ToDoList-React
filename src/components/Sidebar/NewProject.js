import React, { useState, useEffect} from "react";
import AddIcon from "../../assets/add.png";

const AddIconCredits = "https://www.flaticon.com/free-icons/plus";

const NewProject = (props) => {

  return (
    <div className="newproject" onClick={props.changeVisibility('newTaskUI')} Style="cursor: pointer">
      "Add New Project"
      <div className="image">
        {/* <img src={AddIcon} alt="add" data-credits={AddIconCredits}/> */}
      </div>
    </div>
  );
}

export default NewProject;