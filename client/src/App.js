import { Fragment } from "react";
import "./App.css";
import ImportTodo from "./components/InputTodo";

function App() {
  return (
    <Fragment>
      <div className="import-todo">
        <ImportTodo />
      </div>
    </Fragment>
  );
}

export default App;
