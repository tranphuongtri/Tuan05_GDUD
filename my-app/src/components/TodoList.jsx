import { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Todo List
        </h1>

        <form onSubmit={addTodo} className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Thêm công việc mới..."
            className="flex-grow px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
          >
            Thêm
          </button>
        </form>

        <div className="flex justify-center space-x-2 mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-3 py-1 rounded ${
              filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Chưa hoàn thành
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-3 py-1 rounded ${
              filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Đã hoàn thành
          </button>
        </div>

        <ul className="space-y-2 mb-4">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-3 border rounded bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="w-4 h-4 mr-2"
                  />
                  <span
                    className={`${
                      todo.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  &times;
                </button>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">Không có công việc nào</p>
          )}
        </ul>

        {todos.some((todo) => todo.completed) && (
          <div className="text-center">
            <button
              onClick={clearCompleted}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
            >
              Xóa tất cả công việc đã hoàn thành
            </button>
          </div>
        )}

        <div className="mt-4 text-sm text-gray-500 text-center">
          <p>
            Còn {todos.filter((todo) => !todo.completed).length} việc chưa hoàn
            thành
          </p>
        </div>
      </div>
    </div>
  );
}
