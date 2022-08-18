import React, {useState, useEffect} from "react";
import uniqid from "uniqid";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { Project, Task } from "./components/#Misc/ObjTemplate";

// change displayed project from click event that returns the name of the selected project on the sidebar

function initStorage(object) {
    if (localStorage.getItem(object) === null) {
      return 'Storage empty';
    } else {
      return JSON.parse(localStorage[object].name);
    }
}


const proj = {...Project}
console.log(proj);
localStorage.setItem('projects', [JSON.stringify(Project)]);

const StorageObj = JSON.parse(localStorage.getItem('projects'));
console.log(StorageObj);


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

  const [storageTest, setStorageTest] = useState(initStorage('projects'));

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