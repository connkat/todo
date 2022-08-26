const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// create
app.post("/todos", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get
app.get("/todos", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/todos/:id", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update
app.put("/todos/:id", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo updated");
  } catch (error) {
    console.error(error.message);
  }
});

//delete
app.delete("/todos/:id", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1",
      [id]
    );
    res.json("Todo deleted");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
