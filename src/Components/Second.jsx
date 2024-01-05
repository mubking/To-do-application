"use client"
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Second() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedDarkMode = localStorage.getItem('darkMode');
      return storedDarkMode !== null ? JSON.parse(storedDarkMode) : true;
    }
    return true; // Default value if localStorage is not available
  });

  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTodos = localStorage.getItem('todos');
      return storedTodos !== null ? JSON.parse(storedTodos) : [];
    }
    return []; // Default value if localStorage is not available
  });

  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleRadioClick = () => {
    if (todoInput.trim() === '') {
      // Show toast if input is empty
      toast.error('Please enter a todo!');
    } else {
      // Create todo and show success toast
      setTodos([...todos, { text: todoInput, completed: false }]);
      setTodoInput('');
      toast.success('Todo successfully created!');
    }
  };
  
  const editTodo = (index) => {
    const editedText = prompt('Edit todo:', todos[index].text);
    if (editedText !== null) {
      const updatedTodos = [...todos];
      updatedTodos[index].text = editedText;
      setTodos(updatedTodos);
      toast.success('Todo successfully edited!');
    }
  };

  const deleteTodo = (index) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this todo?');
    if (isConfirmed) {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
      toast.success('Todo successfully deleted!');
    }
  };
  useEffect(() => {
    // Save dark mode setting to local storage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    // Save todos to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={`w-full min-h-screen ${darkMode ? 'bg-[#FAFAFA]' : 'bg-black'}`}>
      <div>
        <img
          src={darkMode ? '/bg-desktop-light.jpg' : '/bg-desktop-dark.jpg'}
          alt=""
          className="h-48 w-full object-cover"
          style={{ height: '', width: '100%' }}
        />
      </div>
      <div style={{ position: 'relative', bottom: '100px' }}>
        <div className='flex gap-56 justify-center w-full items-center '>
          <div>
            <h1 className='text-white text-4xl'>Todo</h1>
          </div>
          <div>
            <img
              src={darkMode ? '/icon-moon.svg' : '/icon-sun.svg'}
              alt=""
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <ToastContainer />

        <div className='justify-center text-white p-5 flex  flex-col relative mt-5 outline-none  items-center'>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-lg">
                <input type="radio" onClick={handleRadioClick} />
              </span>
            </div>
            <input
              type="text"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              className={`block w-full rounded-md border-0 py-3.5 pl-8 pr-40 ${
                darkMode ? 'bg-white text-[green] ring-1 ring-inset ring-gray-300' : 'bg-[#25273C]  text-white ring-1 ring-gray-300'
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              placeholder="Create a new to do...."
            />
          </div>

          <ul className="mt-4  md:w-[33%]">
            {filteredTodos.map((todo, index) => (
              <div key={index} className={`flex  flex-row justify-between items-center w-full p-5 ${darkMode ? 'bg-[#FFFFFF]' : 'bg-[#25273C]'} text-[#888AA2]  mb-2  flex-wrap`} >
             
                <div className='space-x-2'>
                <input
                  type="radio"
                  checked={todo.completed}
                  onChange={() => toggleTodo(index)}
                />
                <span className={todo.completed ? 'line-through' : ''}>
                  {todo.text}
                </span>
                </div>
               <div className="flex space-x-2">
              <button className='bg-[blue] text-white' style={{ padding: '2px 8px', flexShrink: 0 }} onClick={() => editTodo(index)}>
                Edit
              </button>
              <button className='bg-[red] text-white' style={{ padding: '2px 8px', flexShrink: 0 }} onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </div>
              </div>
            ))}
          </ul>
          <div className="flex space-x-2 mt-4 text-[#C9C8CF]">
            <button style={{ color: filter === 'all' ? 'blue' : 'inherit' }} onClick={() => setFilter('all')}>All</button>
            <button style={{ color: filter === 'active' ? 'blue' : 'inherit' }} onClick={() => setFilter('active')}>Active</button>
            <button style={{ color: filter === 'completed' ? 'blue' : 'inherit' }} onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={clearCompleted}>Clear Completed</button>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Second;
