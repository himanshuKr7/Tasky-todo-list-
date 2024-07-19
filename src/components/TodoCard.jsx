import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import "./TodoCard.css";

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
    <div className='todo-card-cover'>
      <div className='todo-card'>
        <div className='cardleft'>
          <input 
            type="checkbox" 
            className='' 
            checked={todo.completed} 
            onChange={() => handleComplete(todo.id)} 
          />
            {isEditing ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className='editbox'
            />
          ) : (
            <h4 
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
              className='text-xl md:font-semibold text-slate-100'
            >
              {todo.title}
            </h4>
          )}
        </div>
        <div className='cardright'>
          <button className='ml-5' onClick={handleEdit}>{isEditing ? <MdFileDownloadDone /> : <FaEdit />}</button> 
          <button onClick={() => deleteTodo(todo.id)}><MdDelete /></button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
