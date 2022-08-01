import NewTodo from './Components/NewTodo';
import Todos from './Components/Todos';
import TodosContextProvider from './Components/store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;