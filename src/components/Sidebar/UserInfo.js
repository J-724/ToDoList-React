import React, { useState, useEffect} from "react";

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="image">
        <img src="https://via.placeholder.com/150" alt="Profile Image" Style="max-height: 50px"/>
      </div>
      <div className="user-name">
        <h3>John Doe</h3>
      </div>
    </div>
  )
}

export default UserInfo;