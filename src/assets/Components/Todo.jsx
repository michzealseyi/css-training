import {Component} from 'react'
import TodoItems from './TodoItems'
import PropTypes from 'prop-types'

function Todo(props) {
    
  return (
    <div>{props.todos.map((todo)=>(<TodoItems key={todo.id} todo={todo} markComplete={props.markComplete}/>))}</div>
  )
}
//PropTypes
Todo.propTypes={
    todos:PropTypes.array.isRequired
}
export default Todo