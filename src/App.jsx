import { useState } from 'react';
import './App.css';
import TaskInput from './components/taskInput';
import TasksList from './components/tasksList';
import NavBar from './components/navbar';

function App() {

  const arrayOfTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [items, setItems] = useState(arrayOfTasks);

  const removeTask = (id) => {
    console.log(id);
    setItems( items.filter(item => item.id !== id));
    const newArrayOfTasks = arrayOfTasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newArrayOfTasks));
  }

  const addTask = (title) => {
    if(!title) return;
    const id = Date.now();
    const completed = false;
    setItems([...items, {id, title, completed}]);
    arrayOfTasks.push({id, title, completed})
    console.log(arrayOfTasks);
    localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
  }

  const checkTask = (item) => {
    setItems(prev =>
      prev.map(task => {
        if(task === item) {
          return {...task, completed: !task.completed}
        }
        return task;
      }))

      console.log(items);
  }
  return (
    <div className='container'>
      <TaskInput handleAdd={addTask} />
      <TasksList tasks={items} handleDelete={removeTask} handleCheck={checkTask}/>
      <NavBar tasks={items} />
    </div>
  );
}

export default App;
