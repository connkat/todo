import { Fragment, useState, useEffect } from "react";

import EditTodo from "./EditTodo";

function ListTodos() {
  const [todos, setTodos] = useState([]);
  const getTodos = async (e) => {
    try {
      const res = await fetch("http://localhost:4000/todos");
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  });
  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListTodos;
