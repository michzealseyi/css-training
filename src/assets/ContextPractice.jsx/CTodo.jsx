import React from 'react'
import { TodoContext } from './TodoLists'
import {useContext} from 'react'
import {TodoItems} from './CTodoItems'
import PropTypes from 'prop-types'
import AddTodo from './AddTodo'

function Todo() {
    
    const {todos,markComplete,delTodo,addTodo} =useContext(TodoContext);
    const markComplete2=(id)=>{
      markComplete(id)
    }
    const delTodo2=(id)=>{
      delTodo(id)
    }
    const addTodo2=(title)=>{
      addTodo(title)
    }
  return (

    <div>
      <AddTodo addTodo2={addTodo2}/>
      {todos.map((todo)=>
      (<TodoItems key={todo.id} 
        todo={todo} 
        markComplete2={markComplete2} 
        delTodo2={delTodo2}/>
      ))}
    </div>
  )
}
Todo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
/*PropTypes
Todo.propTypes={
    todos:PropTypes.array.isRequired
}*/
export default Todo;