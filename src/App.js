import './App.css';
import {useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {

  const [newTask, setNewTask] = useState(""); 
  const [theTasks, setTheTasks] = useState(JSON.parse(localStorage.getItem("newItems")) || []); 

  function addItem(newItem) {
    const newId = theTasks.length ? theTasks[theTasks.length - 1].id + 1 : 1;
    const newTasks = [...theTasks, {id: newId, task: newItem, checked: false}]; 
    setTheTasks(newTasks);
  }; 
  
  function handleCheck(id) {
   const checkItems = theTasks.map((item) => {
      return item.id === id ? {...item, checked: !item.checked} : item;
    });
    setTheTasks(checkItems);
    localStorage.setItem("newItems", JSON.stringify(checkItems));
   } 

   function handleDelete(id) {
    const deleteItems = theTasks.filter((item) => {
      return item.id !== id; 
    });
    setTheTasks(deleteItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
      if(!newTask) return;
      addItem(newTask);
      setNewTask("");
      localStorage.setItem("newItems", JSON.stringify(newTask));
  };

  return (
    <div>
      <Header />
      <Main tasks={theTasks} setTheTasks={setTheTasks} newTask={newTask} setNewTask={setNewTask} 
       handleSubmit={handleSubmit} handleDelete={handleDelete} handleCheck={handleCheck} />
      <Footer />
    </div>
  );
}

export default App;
