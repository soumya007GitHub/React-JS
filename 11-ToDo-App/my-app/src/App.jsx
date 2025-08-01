import React, { useState, useEffect } from "react";
import InputField from "./components/InputField";
import DisplayToDo from "./components/DisplayToDo";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("data");
    if (stored) {
      setTodoList(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="body w-screen h-full flex flex-col justify-center items-center">
      <div className="container w-7/10 border-1 border-red-500 p-4 flex flex-col">
        <InputField setTodoList={setTodoList} todoList={todoList} />
        <div className="headings flex justify-between border-b-1 pb-2 border-slate-500">
          <h3>All Todos</h3>
          <div className="showCompleted">
            <input type="checkbox" name="completedTodos" id="completedTodos" className="mx-1" />
            <label htmlFor="completedTodos">Show Completed</label>
          </div>
        </div>
        <DisplayToDo todoList={todoList} />
      </div>
    </div>
  );
}

export default App;
