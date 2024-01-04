// import First from '@/Components/First'
import Second from '@/Components/Second'

export default function Home() {
  return (
    <>
    {/* <First/> */}
    <Second/>

    </>
    // pages/index. 
// "use client"
// import { useState } from 'react';

// const TodoList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [filter, setFilter] = useState('all');

//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, { text: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };

//   const toggleTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   const clearCompleted = () => {
//     const updatedTasks = tasks.filter((task) => !task.completed);
//     setTasks(updatedTasks);
//   };

//   const filteredTasks = tasks.filter((task) => {
//     if (filter === 'active') return !task.completed;
//     if (filter === 'completed') return task.completed;
//     return true; // 'all' filter
//   });

//   return (
//     <div className="flex flex-col items-center mt-10">
//       <div className="flex space-x-2 mb-4">
//         <input
//           type="text"
//           placeholder="Add a new task"
//           className="border p-2"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button className="bg-blue-500 text-white px-4 py-2" onClick={addTask}>
//           Add
//         </button>
//       </div>

//       <div className="flex space-x-2 mb-4">
//         <button className="filter-button" onClick={() => setFilter('all')}>
//           All
//         </button>
//         <button className="filter-button" onClick={() => setFilter('active')}>
//           Active
//         </button>
//         <button className="filter-button" onClick={() => setFilter('completed')}>
//           Completed
//         </button>
//         <button className="filter-button" onClick={clearCompleted}>
//           Clear Completed
//         </button>
//       </div>

//       <div className="flex flex-col items-center">
//         {filteredTasks.map((task, index) => (
//           <div key={index} className="flex items-center space-x-2 mb-2">
//             <input
//               type="radio"
//               checked={task.completed}
//               onChange={() => toggleTask(index)}
//             />
//             <div
//               className={`task ${task.completed ? 'completed' : ''}`}
//             >
//               {task.text}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TodoList;

  )
}
