import React, {Fragment ,useState} from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid';

export function App() {
     const [todos, setTodos] =  useState([
          { id: 1, task: "Tarea", completed: false },      
     ]);

     return (
          <Fragment>
               <TodoList todos={todos} />
               <input type="text" placeholder="Adicionar Tarea"></input>     
               <button>➕</button>
               <button>🗑️</button>          
          </Fragment>
     );
};
