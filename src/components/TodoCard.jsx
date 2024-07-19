import React, { useState } from 'react';

const TodoCard = ({ todo, handleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false); 
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newTitle); 
    }
    setIsEditing(!isEditing); 
  };

  return (
    <div className='todo bg-blue-300 mx-32 my-5 p-2 rounded-lg'>
      <div className='flex justify-between px-10'>
        <div className='flex items-center gap-10 mr-2'>
          <input 
            type="checkbox" 
            className='mr-2' 
            checked={todo.completed} 
            onChange={() => handleComplete(todo.id)} 
          />
        </div>
           {isEditing ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className='text-black text-xl w-[80%]'
            />
          ) : (
            <h4 
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
              className='text-white text-2xl'
            >
              {todo.title}
            </h4>
          )}
        <div className='flex gap-10 ml-2'>
          <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button> 
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
