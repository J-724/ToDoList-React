import React, {useState, useEffect} from "react";
import uniqid from "uniqid";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { Project, Task } from "./components/#Misc/ObjTemplate";

import StorageTest from "./StorageTest";

// change displayed project from click event that returns the name of the selected project on the sidebar
function editStorageTask(newName) {
  const task = JSON.parse(localStorage.getItem('tasks'));
  task.name = newName;
  localStorage.setItem('tasks', JSON.stringify(task));
}

StorageTest();

editStorageTask('Mi perro Ryuk');

function initStorage(item) {
  if (localStorage.getItem(item) === null) {
    return 'Storage empty';
  } else {
    return localStorage.getItem(item); ;
  }
}


const App = () => {
  const [selectedProject, setSelectedProject] = useState('');

  const [projects, setProjects] = useState([
    {
      ...Project,
      id: uniqid(),
    },
  ]);
  
  const [tasks, setTasks] = useState([
    {
      ...Task,
      id: uniqid(),
    },
  ]);

  const [test, setTest] = useState('Test message');

  const [storageTest, setStorageTest] = useState('');

  return (
    <div className="app">
      <Sidebar />
      <Main 
        test={test}
        // storageTest={storageTest}
      />
    </div>
  );
}

export default App; 