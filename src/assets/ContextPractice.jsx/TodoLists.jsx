import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
export const TodoContext=createContext("")
export function TodoProvider(props) {
    const [todos,setTodos]=useState([
        {
            id:uuidv4(),
            title:'Take out the trash',
            completed:false
        },
        {
            id:uuidv4(),
            title:'wash the cloths',
            completed:false
        },
        {
            id:uuidv4(),
            title:'sweep the rooms',
            completed:false
        },
        {
            id:uuidv4(),
            title:'take my bath',
            completed:false
        },
        {
            id:uuidv4(),
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
      function delTodo(id){
        setTodos(prevTodos => prevTodos.filter(todo=>todo.id !==id))
      }
      function addTodo(title){
        const newTodo={
            id:uuidv4(),
            title,
            completed:false 
        }
        setTodos(prevTodos => [...prevTodos, newTodo])

      }
  return (
    
    <TodoContext.Provider value={{todos,markComplete,delTodo,addTodo}}>
        {props.children}
    </TodoContext.Provider>
  )
}
