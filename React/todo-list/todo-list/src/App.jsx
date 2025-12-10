import { useState } from "react";
import "./App.css";
import TodoAdd from "./Components/TodoAdd.jsx";
import TodoItem from "./Components/TodoItem.jsx";

let del = [];
let todoId = 4;
let initialTodo = [
  {
    id : "1",
    content : "This is todo list 1",
    // checked : true
  },
  {
    id : "2",
    content : "This is todo list 2",
    // checked : fale
  },
  {
    id : "3",
    content : "This is todo list 3",
    // checked : false
  },
];

function App() {
  const [todo, setTodo] = useState(initialTodo);

  function handleAddTodo(description) {
    setTodo([
      ...todo,
      {
        id : todoId++,
        content : description,
        // checked : true
      }
      
    ]);
  }

  function handleDeleteTodo(id){
     setTodo(del = todo.filter(item => item.id !== id))  
    console.log(del);
  }

  function handleEditTodo(id){
    
  }


  return (
    <div className="todo">
      <h2>Todo List</h2>

      <TodoAdd onAddTodo={handleAddTodo} />

      {/* <TodoSearch /> */}

      <TodoItem 
      todo={todo}
      onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
