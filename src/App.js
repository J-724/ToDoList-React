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
  const [callPurpose, setCallPurpose] = useState("");
  const [selectedProject, setSelectedProject] = useState('today');
  const [projects, setProjects] = useState([
    initStorage('projects')
  ]);
  const [tasks, setTasks] = useState([
    initStorage('tasks')
  ]);
  const [visible, setVisible] = useState({
    newProjectUI: false,
    newTaskUI: false,
    newTaskUI_inline: false,
  });


  const AddProject = () => {
    const storedProjects = getStorageObj('projects');
    const concatProjects = storedProjects.concat(newProjectObj());
    
    console.log('add project');
    console.log(concatProjects);
    saveObjToStorage('projects', concatProjects);
    setProjects(concatProjects);
  };

  const AddTask = () => {
    const storedTasks = getStorageObj('tasks');
    const concatTasks = storedTasks.concat(newtaskObj());
    
    console.log('add task');
    console.log(concatTasks);
    saveObjToStorage('tasks', concatTasks);
    setTasks(concatTasks);
  };

  const ChangeProject = (id, e) => {
    const { name, value } = e.target;
    const newProjects = projects.map(item => {
      if ( item.id === id) {
        return {
          ...item,
          [name]: value,
        }
      }
      return item;
    });
    setProjects(newProjects);
  };

  const editTask = (id, e) => () => {
    const { name, value } = e.target;

    const storedTasks = getStorageObj('tasks')

    const newTasks = storedTasks.map(item => {
      if ( item.id === id) {
        return {
          ...item,
          [name]: value,
        }
      }
      return item;
    });
    setTasks(newTasks);
    saveObjToStorage('tasks', newTasks);
  };
  
  const changeVisibility = (item) => () => {
    setVisible( visible => ( 
      Object.fromEntries(
        Object.entries(visible).map(
          ([key, value]) => {
            console.log([key, value])
            if (key === item) {
              return [key, (value) ? false : true];
            }
            return [key, value];
          }
        )
      )
    ));
  }

  const changeCallPurpose = (purpose) => {
    setCallPurpose(purpose);
  }

  return (
    <div className="app">
      <Sidebar 
        callPurpose={changeCallPurpose}
        changeVisibility={changeVisibility} 
      />

      { visible.newProjectUI 
        ?  <NewProjectUI
            AddProject={AddProject}
            changeVisibility={changeVisibility}
          />  
        : null 
      }

      <br/>

      { visible.newTaskUI 
        ? <NewTaskUI
            AddTask={AddTask}
            changeVisibility={changeVisibility}
          /> 
        : null 
      }

      {/* need to render task element */}
      <NewTaskUI
        storedTasks={tasks}
        purpose={callPurpose}
        AddTask={AddTask}
        changeVisibility={changeVisibility}
      /> 

      <br/>

      <Main 
        storedTasks={tasks}
        purpose={callPurpose} 
        changeVisibility={changeVisibility}
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