import React from "react";

function Singletodo({ todo, handleAction } = props) {
  return (
    <div className="flex-row single-todo-container" key={todo.id}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() =>
          handleAction({
            type: "handle-complete",
            payload: { id: todo.id },
          })
        }
      />
      <span id={todo.isDone === true && "line-through"}>{todo.todo}</span>
      <div className="button-container flex-row">
        <button
          onClick={() =>
            handleAction({ type: "update-todo", payload: { id: todo.id } })
          }
        >
          <img
            src="https://img.icons8.com/material-outlined/24/000000/edit-image.png"
            className="update-icon"
          />
        </button>
        <button
          onClick={() =>
            handleAction({ type: "remove-todo", payload: { id: todo.id } })
          }
        >
          <img
            src="https://img.icons8.com/color/48/000000/delete-forever.png"
            className="delete-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Singletodo;
