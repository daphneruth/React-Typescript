import { useState } from "react";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import Todo from "./Models/todo";

function App() {
  const [todos, setTodo ]= useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {};
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
