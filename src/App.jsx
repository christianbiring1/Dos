import { useState } from "react";
import "./App.css";
import TaskInput from "./components/taskInput";
import TasksList from "./components/tasksList";
import NavBar from "./components/navbar";
// import HookPlayGround from "./components/custom/hook";

function App() {
  const arrayOfTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [items, setItems] = useState(arrayOfTasks);

  const removeTask = (id) => {
    setItems(items.filter((item) => item.id !== id));
    const newArrayOfTasks = arrayOfTasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newArrayOfTasks));
  };

  const addTask = (title) => {
    if (!title) return;
    const id = Date.now();
    const completed = false;
    setItems([...items, { id, title, completed }]);
    arrayOfTasks.push({ id, title, completed });
    localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
  };

  const checkTask = (item) => {
    const newItems = [...items];
    const index = newItems.indexOf(item);
    newItems[index] = { ...item };
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
    localStorage.setItem("tasks", JSON.stringify(newItems));
  };

  const completedTask = () => {
    const completedTasks = arrayOfTasks.filter((task) => task.completed);
    setItems(completedTasks);
  };

  const activeTask = () => {
    const activeTasks = arrayOfTasks.filter((task) => !task.completed);
    setItems(activeTasks);
  };

  const allTask = () => {
    const allTasks = arrayOfTasks;
    setItems(allTasks);
  };
  return (
    <div className="container">
      <TaskInput handleAdd={addTask} />
      <TasksList
        tasks={items}
        handleDelete={removeTask}
        handleCheck={checkTask}
      />
      <NavBar
        tasks={items}
        onCompleted={completedTask}
        onActive={activeTask}
        onAll={allTask}
      />
    </div>
  );
}

export default App;
