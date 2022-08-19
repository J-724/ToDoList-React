import React, {useState, useEffect} from "react";
import uniqid from "uniqid";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import NewProjectUI from "./components/NewProjectUI";
import NewTaskUI from "./components/NewTaskUI";
import { Project, Task } from "./components/#Misc/ObjTemplate";
import { getStorageObj, saveToStorage, initStorage  } from "./StorageTest";

// change displayed project from click event that returns the name of the selected project on the sidebar

function newtaskObj () {
  const task = {
    ...Task,
    id: uniqid(),
  }
  return JSON.stringify(task);
}

function newProjectObj () {
  const project = {
    ...Project,
    id: uniqid(),
  }
  return JSON.stringify(project);
}



const App = () => {
  const [selectedProject, setSelectedProject] = useState('today');

  const [projects, setProjects] = useState([
    initStorage('projects', newProjectObj)
  ]);
  
  const [tasks, setTasks] = useState([
    initStorage('tasks', newtaskObj)
  ]);


  const AddProject = () => {
    console.log('add project');
    const newProject = [{
      ...Project,
      id: uniqid(),
    }];

    const storedProjects = [getStorageObj('projects')].concat(newProject);



    console.log('Inside addProject   storedProjects:');
    console.log(storedProjects);
    // console.log('Inside addProject  concat storedProjects:');
    // console.log(storedProjects.concat(newProject));


    saveToStorage('projects', storedProjects);
  };

  const ChangeProject = (id, event) => {
  
  };





  return (
    <div className="app">
      <Sidebar />
      <br />
      <NewProjectUI 
        AddProject={AddProject}  
      />
      <NewTaskUI />
      <br />
      <Main 
      />
    </div>
  );
}





console.log('Mi perrito Ryuk')
console.log(localStorage)
console.log('Stored projects: ')
console.log(getStorageObj('projects'))
console.log('Stored tasks: ')
console.log(getStorageObj('tasks'))
localStorage.clear();

export default App; 