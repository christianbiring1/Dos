import logo from './logo.svg';
import './App.css';
import TaskInput from './components/taskInput';
import TasksList from './components/tasksList';

function App() {
  return (
    <div>
      <TaskInput />
      <TasksList />
    </div>
  );
}

export default App;
