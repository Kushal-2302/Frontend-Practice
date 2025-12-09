import { useState } from 'react';

export default function TodoAdd({onAddTodo}) {
  const [description, setDescription] = useState('');

  function handleClick(e){
    setDescription(e.target.value);
    // console.log("string");
  }

  function handleSubmit(e){
    e.preventDefault();
    setDescription('');
    onAddTodo(description);
  }

  return (
    <div>
        <form action="" className="form">
            <input type="text" placeholder="Add Item"  value={description} onChange={handleClick}/>
            <button onClick = {handleSubmit}>Add</button> <hr/>
        </form>
    </div>
  )
}