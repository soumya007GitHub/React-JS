import React from 'react';

function DisplayToDo({ todoList }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Todo List:</h2>
      <ul>
        {todoList.map((item) => (
          <li key={item.id} className="mb-2 p-2 bg-violet-900 rounded text-white">
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayToDo;
