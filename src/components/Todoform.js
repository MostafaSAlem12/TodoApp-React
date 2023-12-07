import React , {useState} from "react";

export const TodoForm = () => {
    const { value, setValue } = useState("");
  return (
    <form class="TodoForm">
      <input type="text" className="todo-input" placeholder="what is the task today"
        onChange={(e)=> console.log(e.target.value)}/>
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}
