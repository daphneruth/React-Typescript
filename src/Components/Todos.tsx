import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../Models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text}/>
        ))}
      </ul>
    </div>
  );
};
export default Todos;
