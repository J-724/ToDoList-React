import { Project, Task } from "./components/#Misc/ObjTemplate";
import uniqid from "uniqid";



function getStorageObj(item) {
  const storageObj = JSON.parse(localStorage.getItem(item))
  return storageObj;
}

function saveToStorage(item, data) {
  const stringifyData = JSON.stringify(data);
  localStorage.setItem(item, stringifyData);
}

//Will brake is a funciton is not passed in
function initStorage(item, data) {
  if (localStorage.getItem(item) === null) {
    localStorage.setItem(item, [data()])
  }

  const object = JSON.parse(localStorage.getItem(item));

  return object;
}

export {getStorageObj, saveToStorage, initStorage};











//Clear in future, not used code
function StorageTest() {
  localStorage.setItem('projects', [
    JSON.stringify({
      ...Project, 
      id: uniqid()
  })]);
  
  localStorage.setItem('tasks', [newtask()]);
  
  const getTsk = localStorage.getItem('tasks');
  const parseTsk = JSON.parse(getTsk);
  
  console.log("Direct storage call: " + getTsk);
  console.log(`Parse tasks`);
  console.log(parseTsk);
  
  console.log(localStorage)
  // localStorage.clear()
}

function editStorageTask(newName) {
  const task = JSON.parse(localStorage.getItem('tasks'));
  task.name = newName;
  localStorage.setItem('tasks', JSON.stringify(task));
}

