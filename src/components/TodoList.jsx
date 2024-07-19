import React from 'react';
import TodoCard from './TodoCard';
import "./TodoList.css"

const TodoList = ({ todos, handleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='todo-container'>
      <h2>To-Do</h2>
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
