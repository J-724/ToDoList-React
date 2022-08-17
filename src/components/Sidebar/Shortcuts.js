import React, { useState, useEffect} from "react";

const Shortcuts = () => {

  const TodayTasks= () => {

    return ( 
      <div className="sidebar-item">
        Today
      </div>
    )
  }

  const UpcomingTasks = () => {

    return (
      <div className="sidebar-item">
        Upcoming
      </div>
    )
  }

  return (
    <div className="shortcuts">
      <TodayTasks/>
      <UpcomingTasks/>
    </div>
  );
}

export default Shortcuts;