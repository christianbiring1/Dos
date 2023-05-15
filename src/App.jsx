import { useState } from 'react';
import './App.css';
import TaskInput from './components/taskInput';
import TasksList from './components/tasksList';

function App() {
  const thingsTodo = [
    {
      id: 1,
      title: 'First task',
    },
    {id: 2,
      title: 'Task number two'
    }
  ];

  const [items, setItems] = useState(thingsTodo);

  const removeTask = (id) => {
    console.log(id);
    setItems( items.filter(item => item.id !== id));
  }

  const addTask = (title) => {
    if(!title) return;
    const id = Date.now();
    setItems([...items, {id, title}])
    console.log(title)
  }
  return (
    <div>
      <TaskInput handleAdd={addTask} />
      <TasksList tasks={items} handleDelete={removeTask}/>
    </div>
  );
}

export default App;
