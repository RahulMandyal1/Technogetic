import React from "react";
import Singletodo from "./Singletodo";

function Todos({ todos, handleAction }) {
  return (
    <div className="todos-wrapper">
      {todos.map((todo) => {
        return (
          <Singletodo todo={todo} handleAction={handleAction} key={todo.id} />
        );
      })}
    </div>
  );
}

export default Todos;

