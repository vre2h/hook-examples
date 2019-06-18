import React, { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([
    { title: "Learn Hooks", state: "in process" }
  ]);
  const [todoValue, setTodoValue] = useState("");
  const [todoState, setTodoState] = useState("done");

  const saveTodo = () => {
    if (todoValue.trim() !== "") {
      setTodos([...todos, { title: todoValue, state: todoState }]);
      setTodoValue("");
    }
  };

  return (
    <div>
      <div>
        <select value={todoState} onChange={e => setTodoState(e.target.value)}>
          <option value="in process">in process</option>
          <option value="done">done</option>
          <option value="postponed">postponed</option>
        </select>
        <input
          placeholder="To do"
          value={todoValue}
          onChange={e => setTodoValue(e.target.value)}
          onKeyDown={e => e.keyCode === 13 && saveTodo()}
        />
        <button onClick={saveTodo}>Add</button>
      </div>
      <ul>
        {todos.map(({ title, state }) => (
          <li>
            <span>{title}</span> - <span>{state}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
