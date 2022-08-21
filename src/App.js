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
    console.log(concatProjects);

    const storedProjects = getStorageObj('projects');
    const concatProjects = storedProjects.concat(newProjectObj());

    saveObjToStorage('projects', storedProjects.concat(newProjectObj()));
  };

  const AddTask = () => {
    console.log('add task');
    console.log(concatTasks);

    const storedTasks = getStorageObj('tasks');
    const concatTasks = storedTasks.concat(newtaskObj());

    saveObjToStorage('tasks', concatTasks);
    setProjects(concatProjects);
  }


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

  const ChangeTask = (id, e) => {

  };


  const [visible, setVisible] = useState({
    newProjectUI: false,
    newTaskUI: false,
    newTaskUI_inline: false,
  });


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






  const changeVisibilityV1 = () => (object) => {
    console.log('change visibility');
    return (visible[object]) ? setVisible(visible.object = false) : setVisible(visible.object = true);
  }

  console.log('visible');
  console.log(visible.newProjectUI);

  return (
    <div className="app">
      <Sidebar 
        changeVisibility={changeVisibility} 
      />

      { visible.newProjectUI ?  <NewProjectUI/>  : null }

      <NewTaskUI 
        AddTask={AddTask}
      />

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