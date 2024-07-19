import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, handleComplete, deleteTodo, editTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoCard 
          key={todo.id} 
          todo={todo} 
          handleComplete={handleComplete} 
          deleteTodo={deleteTodo} 
          editTodo={editTodo} 
        />
      ))}
    </div>
  );
}

export default TodoList;
