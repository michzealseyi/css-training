import React from 'react'
import PropTypes from 'prop-types'

export function TodoItems(props) {
    //FUNCTION STYLING
    function getStyle() {
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: props.todo.completed ?
                'line-through' : 'none'
        }
    }
  return (
    <div style={getStyle()}>
       <p>
        <input type="checkbox" onChange={props.markComplete2.bind(this,props.todo.id)}/>{' '}
         {props.todo.title}
         <button onClick={props.delTodo2.bind(this,props.todo.id)} style={btnStyle}>x</button>
        </p> 
    </div>
  )
}

//PropTypes
TodoItems.propTypes={
    todo:PropTypes.object.isRequired
}
 const btnStyle={
  background:'#ff0000',
  color:'#fff',
  border:'none',
  padding:'5px 9px',
  borderRadius:'50%',
  cursor:'pointer',
  float:'right'
 }