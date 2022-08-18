import { Project, Task } from "./components/#Misc/ObjTemplate";
import uniqid from "uniqid";

function StorageTest() {
  function newtask () {
    const task = {
      ...Task,
      id: uniqid(),
    }
    return JSON.stringify(task);
  }
  
  
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


export default StorageTest;