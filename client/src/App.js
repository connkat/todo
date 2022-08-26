import { Fragment } from "react";
import "./App.css";
import ImportTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="import-todo">
        <ImportTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
