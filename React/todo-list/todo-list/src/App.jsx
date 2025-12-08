import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoAdd from "./Components/TodoAdd.jsx";
import TodoSearch from "./Components/TodoSearch.jsx";
import TodoItem from "./Components/TodoItem.jsx";

function App() {
  return (
    <div className="todo">
      <h2>Todo List</h2>
      <div className="container">
        <div className="todo-add">
          <TodoAdd />
        </div>
        <div className="todo-body">
          <div>
            <TodoSearch />
          </div>
          <div className="todo-items">
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
