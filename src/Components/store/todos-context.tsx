
import React, { useState } from "react";
import Todo from "../../Models/todo";

const TodoContext = React.createContext<{
    items: Todo[];
    addTodo:()=> void;
    removeTodo:(id:string)=>void;

}>({
    items: [],
    addTodo: () => {},
    removeTodo: (id:string)=> {}
})
const TodosContextProvider:React.FC= (props)=> {
    useState() const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
      }

    return <TodosContext.Provider>{props.children}</TodosContext.Provider>
}

