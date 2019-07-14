import React, { useState } from "react";
import {
  loadFromLocalStorageByKey,
  saveToLocalStorageByKey
} from "../helpers/localStorage";

function Todos() {
  const importedTodosFromLocalStorage = loadFromLocalStorageByKey("hook-todos");

  const [todos, setTodos] = useState(importedTodosFromLocalStorage);
  const [todoValue, setTodoValue] = useState("");
  const [todoState, setTodoState] = useState("done");

  const saveTodo = () => {
    if (todoValue.trim() !== "") {
      const updTodos = [
        ...todos,
        { title: todoValue, state: todoState, id: todos.length + 1 }
      ];
      setTodos(updTodos);
      setTodoValue("");
      saveToLocalStorageByKey("hook-todos", JSON.stringify(updTodos));
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
        {todos.map(({ title, state, id }) => (
          <li key={id}>
            <span>{title}</span> - <span>{state}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
