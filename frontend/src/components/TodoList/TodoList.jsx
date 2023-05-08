import React, { useState, useEffect } from "react";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos && JSON.parse(storedTodos).length > 0) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, newTodo]);

  function showToast(message) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = `
      <p>${message}</p>
      <button>&times;</button>
    `;
    const closeButton = toast.querySelector("button");
    closeButton.addEventListener("click", () => {
      document.body.removeChild(toast);
    });
    document.body.appendChild(toast);
  }

  function handleAddTodo() {
    if (newTodo.length < 3) {
      showToast("Veuillez entrer plus de 3 caractères");
      return;
    }

    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  }

  function handleToggleTodo(todoId) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function handleDeleteTodo(todoId) {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  }

  return (
    <div className="todo-list">
      <h2 id="TodoListTitle">Liste de Tâches</h2>
      <div className="input-container">
        <input
          id="TodoListInput"
          type="text"
          placeholder="nouvelle tâche..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodo();
            }
          }}
        />
        <button type="button" className="add-todo" onClick={handleAddTodo}>
          Ajouter
        </button>
      </div>
      <ul className="todos">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="todo-item">
              <div className="todo-content">
                {" "}
                {/* Add this div */}
                <input
                  type="checkbox"
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                <label
                  htmlFor={`todo-${todo.id}`}
                  style={
                    todo.completed
                      ? { textDecoration: "line-through", color: "darkorange" }
                      : {}
                  }
                  className="todoText"
                >
                  {todo.text}
                </label>
              </div>
              <button
                type="button"
                className="delete-todo"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
