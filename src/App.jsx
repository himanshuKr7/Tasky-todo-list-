import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const saveToLocal = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const handleAddTodo = (todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    saveToLocal(updatedTodos);
  };

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    saveToLocal(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveToLocal(updatedTodos);
  };

  const editTodo = (id, title) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title } : todo
    );
    setTodos(updatedTodos);
    saveToLocal(updatedTodos);
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
        <AddTodo addTodo={handleAddTodo} />
        <Filter filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} />
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