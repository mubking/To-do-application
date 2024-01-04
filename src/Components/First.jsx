"use client"
import React, { useState, useEffect } from 'react';

const useLocalStorageTasks = () => {
    const [tasks, setTasks] = useState(
      () => JSON.parse(localStorage.getItem('tasks')) || []
    );
  
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    return [tasks, setTasks];
  };
function First() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(true);


  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const clearCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  const itemsLeft = tasks.filter((task) => !task.completed).length;


  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });
  

  return (
    <div className={`h-screen w-full ${darkMode ? 'bg-white' : 'bg-black'} `}>
      <div>
        <img src="/bg-desktop-dark.jpg" alt="" style={{ height: '', width: '100%' }} />
      </div>
      <div className="text-white relative w-full bottom-24 justify-center flex flex-col items-center">
        <div className="flex items-center gap-52">
          <div>
            <h1 className={`text-4xl ${darkMode ? 'text-white' : 'text-black'}`}>TODO</h1>
          </div>
          <div>
          <img
      src={darkMode ? '/icon-moon.svg' : '/icon-sun.svg'}
      alt=""
      onClick={() => setDarkMode(!darkMode)}
      className="cursor-pointer"
    />          </div>
        </div>

        <div className="flex flex-col items-center w-full  mt-10">
          <div className="flex space-x-2 mb-4 ">
            <input
              type="text"
              placeholder="Create a new to do"
              className="border p-2 w-[300%] text-black"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2" onClick={addTask}>
              Add
            </button>
          </div>

          {filteredTasks.map((task, index) => (
            <div key={index} className="flex items-center w-full p-5 bg-[#25273C] text-[#888AA2] space-x-2 mb-2">
              <input
                type="radio"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
              <span className={task.completed ? 'line-through' : ''}>
                {task.text}
              </span>
            </div>
          ))}

          <div className="flex space-x-2 mt-4">
          <button>{itemsLeft} items left</button>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('active')}>Active</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={clearCompleted}>Clear Completed</button>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default First;
