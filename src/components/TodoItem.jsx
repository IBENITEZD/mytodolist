import React from "react" ;

export function TodoItem({ todo }) {
  const {id, task, completed} = todo;
  console.log (todo);
  return (
    <li>
       {task}
    </li>
    );
}