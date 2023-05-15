import { useState } from 'react';
import './App.css';
import TaskInput from './components/taskInput';
import TasksList from './components/tasksList';
import NavBar from './components/navbar';

function App() {
  const thingsTodo = [
    {
      id: 1,
      title: 'First task',
      completed: false
    },
    {id: 2,
      title: 'Task number two',
      completed: false
    },
    {id: 3,
      title: 'Task number three',
      completed: false
    },
    {id: 4,
      title: 'Task number four',
      completed: false
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
    <div>
      <TaskInput handleAdd={addTask} />
      <TasksList tasks={items} handleDelete={removeTask} handleCheck={checkTask}/>
      <NavBar tasks={items} />
    </div>
  );
}

export default App;
