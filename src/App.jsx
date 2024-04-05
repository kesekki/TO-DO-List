import React from 'react';
import { task_data } from '../data';
import './App.css';
import Header from './components/BlockHeader';
import Button from './components/Button';
import TaskBlock from './components/Task';
import TaskInput from './components/TaskInput';


// function task_data(props) {
//   return (
    
//   )
// }

function App() {

  return (
    <>
      <div className="App">
        <div className="todo-list">
          <Header />
        <div className="UI">
          <div className="calendar">
              <TaskInput/>
              <Button /> 
          </div>
          <h1>Your tasks:</h1>
          <TaskBlock/>
        </div>
      </div>
    </div>
    </>
  )
}


export default App 
