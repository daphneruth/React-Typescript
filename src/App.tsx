import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import Todo from "./Models/todo";

function App() {
  const todos = [new Todo("Learn Node"), new Todo("Learn React")];
  const addTodoHandler = (todoText: string) => {};
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
