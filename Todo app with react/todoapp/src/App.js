import "./App.css";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";
import History from "./pages/History";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/" element={<TodoForm />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <TodoForm />
    </div>
  );
}

export default App;
