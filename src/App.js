import { useState } from 'react'
import './App.css';
import Task from './Components/Task';



function App() {

  const [taskName, setTaskName] = useState('');
  const [timeName, setTimeName] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, {taskName: taskName, timeName: timeName}]);
    setTaskName('');
    setTimeName('');
  }

  return (
    <div className="App">
      
      <h1>Todo List</h1>
      <input type='text' placeholder='task' id='task' onChange={(e) => { setTaskName(e.target.value) }} />
      <input type='text' placeholder='time' id='time' onChange={(e) => { setTimeName(e.target.value) }} />
      <button id='add' onClick={addTask}>ADD</button>
      
      {taskList.map((task) => {
        return (
          <Task taskName={task.taskName} timeName={task.timeName} />
        )
      })}
      
    </div>
  );
}

export default App;
