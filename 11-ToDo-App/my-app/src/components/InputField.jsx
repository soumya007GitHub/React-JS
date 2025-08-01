import React, { useState } from 'react'

function InputField({ todoList, setTodoList }) {
  const [value, setValue] = useState('');

  const addData = () => {
    if (value.trim() === "") return;

    const newItem = {
      id: Date.now(),
      value: value,
      completed: false
    };

    setTodoList([...todoList, newItem]);
    setValue('');
  }

  return (
    <>
      <input
        type="text"
        name="text"
        id="text"
        className='w-full p-4 rounded-sm text-white bg-indigo-900 outline-none'
        placeholder="Work on react.js"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="button"
        value="Add ToDo"
        className="p-4 bg-indigo-900 text-white rounded-sm my-4"
        onClick={addData}
      />
    </>
  );
}

export default InputField;
