import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (user) {
      const storedTodos = localStorage.getItem(`todos_${user.username}`);
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }
  }, [user]);

  const saveToLocal = (updatedTodos) => {
    if (user) {
      localStorage.setItem(`todos_${user.username}`, JSON.stringify(updatedTodos));
    }
  };

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

  const handleLogin = (user) => {
    setUser(user);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center">
      {isLoggedIn ? (
        <>
          <h1 className='title'>Tasky! - Your Own Todo List, Hey : {user.username}</h1>
          <div className="flex justify-center w-full mb-4">
            <button
              onClick={handleLogout}
              className=" text-red-500 py-2 px-4  mb-5 rounded-md border border-red-500 hover:bg-red-400 hover:text-white transition-colors"
            >
              Logout
            </button>
          </div>
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
        </>
      ) : (
        isSignup ? (
          <Signup toggleSignup={toggleSignup} />
        ) : (
          <Login handleLogin={handleLogin} toggleSignup={toggleSignup} />
        )
      )}
    </div>
  );
};

export default App;
