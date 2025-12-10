import { useState } from "react";

export default function TodoItem({todo,onChange, onDelete}) {

  return (
    <div>
      {todo.map((item) => {
        return (
          <div style={{display:"flex"}}>
            <p>{item.id} - {item.content}</p>
            <input type="checkbox" />
            <button>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
