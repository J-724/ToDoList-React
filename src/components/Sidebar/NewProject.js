import React, { useState, useEffect} from "react";
import AddIcon from "../../assets/add.png";

const AddIconCredits = "https://www.flaticon.com/free-icons/plus";

const NewProject = () => {

  return (
    <div className="newproject">
      <div className="image">
        <img src={AddIcon} alt="add" data-credits={AddIconCredits}/>
      </div>
    </div>
  );
}

export default NewProject;