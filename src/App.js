import React, {useState, useEffect} from "react";
import uniqid from "uniqid";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import NewProjectUI from "./components/NewProjectUI";
import NewTaskUI from "./components/NewTaskUI";
import { Project, Task } from "./components/#Misc/ObjTemplate";
import { getStorageObj, saveObjToStorage, initStorage  } from "./StorageTest";

// change displayed project from click event that returns the name of the selected project on the sidebar

function newtaskObj () {
  const task = {
    ...Task,
    id: uniqid(),
  }
  return task;
}

function newProjectObj () {
  const project = {
    ...Project,
    id: uniqid(),
  }
  return project;
}



const App = () => {
  const [selectedProject, setSelectedProject] = useState('today');

  const [projects, setProjects] = useState([
    initStorage('projects')
  ]);
  
  const [tasks, setTasks] = useState([
    initStorage('tasks')
  ]);




  const AddProject = () => {
    console.log('add project');

    const storedProjects = getStorageObj('projects');

    const concatProjects = storedProjects.concat(newProjectObj());


    console.log('Inside addProject   storedProjects:');
    console.log(storedProjects);
    console.log('newProject:');
    console.log(newProjectObj());
    console.log('concatProjects:');
    console.log(concatProjects);

    // console.log('Inside addProject  concat storedProjects:');
    // console.log(storedProjects.concat(newProject));


    saveObjToStorage('projects', storedProjects.concat(newProjectObj()));
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
console.log(localStorage.getItem('projects'))
console.log('Stored tasks: ')
console.log(getStorageObj('tasks'))
// localStorage.clear();

export default App; 