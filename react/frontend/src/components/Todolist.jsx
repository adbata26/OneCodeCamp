import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  function remove(e) {
    todos.splice(e.target.value, 1);
    setTodos([...todos]);
  }

  function update(e) {
    setInputValue(todos[e.target.value]);
    todos.splice(e.target.value, 1);
    setTodos([...todos]);

  }


  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            &nbsp;
            <button onClick={remove} value={index}>
              REMOVE
            </button>

            <button onClick={update} value={index}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
