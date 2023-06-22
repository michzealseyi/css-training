import React from 'react';

function markComplete(id, todos, setTodos) {
  setTodos(prevTodos =>
    prevTodos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
  );
}

export default markComplete;