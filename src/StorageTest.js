import { Project, Task } from "./components/#Misc/ObjTemplate";
import uniqid from "uniqid";



function getStorageObj(item) {
  const storageObj = JSON.parse(localStorage.getItem(item))
  return storageObj;
}

function saveObjToStorage(item, data) {
  const stringifyData = JSON.stringify(data);
  localStorage.setItem(item, stringifyData);
}

//Will brake is a funciton is not passed in
function initStorage(item) {
  if (localStorage.getItem(item) === null) {
    localStorage.setItem(item, '[]')
    return localStorage.getItem(item);
  }

  const object = JSON.parse(localStorage.getItem(item));

  return object;
}

export {getStorageObj, saveObjToStorage, initStorage};











//Clear in future, not used code
function editStorageTask(newName) {
  const task = JSON.parse(localStorage.getItem('tasks'));
  task.name = newName;
  localStorage.setItem('tasks', JSON.stringify(task));
}

