import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import FilterTodo from './components/Filter';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    setTodos(todos);
  },[]);

  const saveToLocal=() => {
      localStorage.setItem("todos",JSON.stringify(todos))
  }
  
  const handleaddTodo = (todo) => {
    setTodos([...todos, todo]);
    saveToLocal();
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    saveToLocal();
  };

  console.log(todos);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    saveToLocal();
  };

  const editTodo = (id, title) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      )
    );
    saveToLocal();
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all' && search === '') return true;
    if (filter === 'completed' && todo.completed && (search === '' || todo.title.toLowerCase().includes(search.toLowerCase()))) return true;
    if (filter === 'incomplete' && !todo.completed && (search === '' || todo.title.toLowerCase().includes(search.toLowerCase()))) return true;
    if (filter === 'all' && todo.title.toLowerCase().includes(search.toLowerCase())) return true;
    return false;
  });

  return (
    <div className="">
      <h1 className='title'>Tasky-Your Todo List !</h1>
      <div className="todo-header">
        <AddTodo addTodo={handleaddTodo} />
        <FilterTodo filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} />
        <TodoList
        todos={filteredTodos}
        handleComplete={handleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
      </div>
    </div>
  );
};

export default App;
