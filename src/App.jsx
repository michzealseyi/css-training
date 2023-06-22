import {useState } from 'react';
import './App.css'
import Todo from "./assets/Components/Todo";
import TodoItems from './assets/Components/TodoItems';
function App() {
  const [todos,setTodos]=useState([
    {
        id:1,
        title:'Take out the trash',
        completed:false
    },
    {
        id:2,
        title:'wash the cloths',
        completed:false
    },
    {
        id:3,
        title:'sweep the rooms',
        completed:false
    },
    {
        id:4,
        title:'take my bath',
        completed:false
    },
    {
        id:5,
        title:'book a ride',
        completed:false
    }
])
  //TOGGLE COMPLETE
  function markComplete(id) {
    setTodos(prevTodos => prevTodos.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed
      };
    }
    return todo;
    }));
  }
  
  return (
    <div className="App">
       <Todo todos={todos} markComplete={markComplete}/>
    </div>
  ); 
}

export default App;


