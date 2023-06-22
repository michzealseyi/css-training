import React from 'react'
import PropTypes from 'prop-types'

function TodoItems(props,{todo,markComplete}) {
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
        <input type="checkbox" onChange={props.markComplete.bind(this, props.todo.id)}/>{' '}
         {props.todo.title}
        </p> 
    </div>
  )
}
//PropTypes
TodoItems.propTypes={
    todo:PropTypes.object.isRequired
}
export default TodoItems