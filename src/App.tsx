import NewTodo from './Components/NewTodo';
import Todos from './Components/Todos';
import Todo from './Models/todo';

function App() {

  const todos =[
    new Todo('Learn Node'),
    new Todo('Learn React')
  ]
  return (
    <div>

    <Todos items={todos}/>  

    </div>
    
  );
}

export default App;
