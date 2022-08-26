import { useState } from "react";

function ImportTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const res = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

    //   window.location = "/";
    setDescription("");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5">TODO</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
}

export default ImportTodo;
