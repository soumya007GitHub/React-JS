import React from 'react';

function DisplayToDo({ todoList, markComplete, showCompleted }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Todo List:</h2>
      <ul>
        {todoList
          .filter(item => showCompleted ? true : !item.completed)
          .map((item) => (
            <li
              key={item.id}
              className={`mb-2 p-2 px-5 rounded bg-blue-800 text-white flex justify-between items-center ${item.completed ? 'line-through' : ''
                }`}
            >
              {item.value}
              <button className=' hover:text-red-500' onClick={() => markComplete(item.id)}>
                <i className={`fa-solid fa-check ${item.completed ? 'text-green-500': 'text-red-500' }`}></i>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default DisplayToDo;
