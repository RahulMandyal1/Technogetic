import React, { useRef, useState } from "react";
import "./todo.css";
import Todos from "./Todos";

function Todo() {
  let [todoTitle, setTodoTitle] = useState("");
  let [todos, setTodo] = useState([]);

  const handleAction = ({ type, payload, event } = action) => {
    let allTodos = [...todos];

    //to create a todo
    if (type === "add-todo") {
      event.preventDefault();
      console.log("coming inside this");
      if (todoTitle !== "" && todoTitle.length > 3) {
        let newTodo = { id: randomId(), todo: todoTitle, isDone: false };
        setTodo([...todos, newTodo]);
        //   also make the todo empty for the next go
        setTodoTitle("");
      }
    }

    // to delete a todo
    if (type === "remove-todo") {
      allTodos = allTodos.filter((todo) => todo.id != payload.id);
      console.log("this is allTodos  that we get ", allTodos);
      setTodo(allTodos);
    }

    // make isDone true and false
    if (type === "handle-complete") {
      allTodos = allTodos.map((todo) => {
        if (payload.id === todo.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      setTodo(allTodos);
    }

    // to update  a todo
    if (type === "update-todo") {
      const updateTitle = prompt("Please enter updated title here");
      allTodos = allTodos.map((eachtodo) => {
        if (payload.id === eachtodo.id && updateTitle.length > 3) {
          eachtodo.todo = updateTitle;
        }
        return eachtodo;
      });
      setTodo(allTodos);
    }
  };

  //function by which we will get id of our each todo
  const randomId = () => {
    return Math.floor(Math.random(2347834) * 234343);
  };

  return (
    <section>
      <form
        className="todo-container"
        onSubmit={(event) => handleAction({ type: "add-todo", event: event })}
      >
        <h1 className="todo-heading">Todo App</h1>
        <div className="input-container">
          <input
            type="text"
            className="userinput"
            placeholder="What needs to be Done"
            value={todoTitle}
            onChange={({ target }) => setTodoTitle(target.value)}
          />
          <button type="submit" className="create-btn">
            create
          </button>
        </div>
        <Todos todos={todos} handleAction={handleAction} />
      </form>
    </section>
  );
}

export default Todo;
